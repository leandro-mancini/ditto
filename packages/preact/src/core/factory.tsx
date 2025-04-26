'use client';

import { useMemo } from 'preact/hooks';
import isPropValid from '@emotion/is-prop-valid';
import { serializeStyles } from '@emotion/serialize';
import { compact, cx } from '@dittox/styled-system';
import { useDittoContext } from './provider';
import { useResolvedProps } from './use-resolved-props';
import { StyledFactoryFn, JsxFactory } from './factory.types';
import { getRegisteredStyles } from '@emotion/utils';

const testOmitPropsOnStringTag = isPropValid;
const testOmitPropsOnComponent = (key: string) => key !== 'theme';

const composeShouldForwardProps = (tag: any, options: any, isReal: boolean) => {
  let shouldForwardProp;
  if (options) {
    const optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp =
      tag.__emotion_forwardProp && optionsShouldForwardProp
        ? (propName: string) =>
            tag.__emotion_forwardProp(propName) &&
            optionsShouldForwardProp(propName)
        : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};

const Insertion = ({ cache, serialized, isStringTag }: any) => {
  const cacheKey = cache?.key || 'css';

  let serializedNames = serialized.name;
  let next = serialized.next;

  while (next !== undefined) {
    serializedNames = cx(serializedNames, next.name);
    next = next.next;
  }

  const className = `${cacheKey}-${serialized.name}`;
  const stylesheet = `.${className}{${serialized.styles}}`;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{ __html: stylesheet }}
        data-emotion={className}
      />
    </>
  );
};

const createStyled = (tag: any, configOrCva: any = {}, options: any = {}) => {
  if (process.env['NODE_ENV'] !== 'production') {
    if (tag === undefined) {
      throw new Error(
        'Você está tentando criar um elemento estilizado com um componente indefinido.\nVocê pode ter esquecido de importá-lo.'
      );
    }
  }

  const isReal = tag.__emotion_real === tag;
  const baseTag = (isReal && tag.__emotion_base) || tag;

  let identifierName: string | undefined;
  let targetClassName: string | undefined;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  let styles: any[] = [];

  const Styled = (inProps: any, cache: any, ref: any) => {
    const { cva, isValidProperty } = useDittoContext();

    const cvaFn = configOrCva.__cva__ ? configOrCva : cva(configOrCva);
    const cvaRecipe = mergeCva(tag.__emotion_cva, cvaFn);

    const createShouldForwardProps = (props: string[]) => {
      return (prop: string, variantKeys: string[]) => {
        if (props.includes(prop)) return true;
        return !variantKeys?.includes(prop) && !isValidProperty(prop);
      };
    };

    if (!options.shouldForwardProp && options.forwardProps) {
      options.shouldForwardProp = createShouldForwardProps(
        options.forwardProps
      );
    }

    const shouldForwardProp = composeShouldForwardProps(tag, options, isReal);

    const initShouldForwardProp = (prop: string, variantKeys: string[]) => {
      const emotionSfp =
        typeof tag === 'string' && tag.charCodeAt(0) > 96
          ? testOmitPropsOnStringTag
          : testOmitPropsOnComponent;
      const dittoSfp = !variantKeys?.includes(prop) && !isValidProperty(prop);
      return emotionSfp(prop) && dittoSfp;
    };

    const defaultShouldForwardProp = shouldForwardProp || initShouldForwardProp;

    const propsWithDefault = useMemo(
      () => Object.assign({}, options.defaultProps, compact(inProps)),
      [inProps]
    );

    const { props, styles: styleProps } = useResolvedProps(
      propsWithDefault,
      cvaRecipe,
      defaultShouldForwardProp
    );

    const shouldUseAs = !defaultShouldForwardProp('as');

    let FinalTag = (shouldUseAs && props.as) || baseTag;

    let className = '';
    let classInterpolations: any[] = [styleProps];
    let mergedProps: any = props;
    if (props.theme == null) {
      mergedProps = {};
      for (let key in props) {
        mergedProps[key] = props[key];
      }

      mergedProps.theme = {};
    }

    if (typeof props.className === 'string') {
      className = getRegisteredStyles(
        cache.registered,
        classInterpolations,
        props.className
      );
    } else if (props.className != null) {
      className = cx(className, props.className);
    }

    const serialized = serializeStyles(
      styles.concat(classInterpolations),
      cache.registered,
      mergedProps
    );
    className = cx(className, `${cache?.key || 'css'}-${serialized.name}`);

    if (targetClassName !== undefined) {
      className = cx(className, targetClassName);
    }

    const finalShouldForwardProp =
      shouldUseAs && shouldForwardProp === undefined
        ? initShouldForwardProp
        : defaultShouldForwardProp;

    let newProps: any = {};

    for (let key in props) {
      if (shouldUseAs && key === 'as') continue;
      if (finalShouldForwardProp(key)) {
        newProps[key] = props[key];
      }
    }

    newProps.className = className.trim();
    newProps.ref = ref;

    return (
      <>
        <Insertion
          cache={cache}
          serialized={serialized}
          isStringTag={typeof FinalTag === 'string'}
        />
        <FinalTag {...newProps} />
      </>
    );
  };

  Styled.displayName =
    identifierName !== undefined
      ? identifierName
      : `Styled(${
          typeof baseTag === 'string'
            ? baseTag
            : baseTag.displayName || baseTag.name || 'Component'
        })`;

  Styled.__emotion_real = Styled;
  Styled.__emotion_base = baseTag;
  Styled.__emotion_forwardProp = options.shouldForwardProp;
  Styled.__emotion_cva = configOrCva;

  return Styled;
};

// @ts-ignore
const styledFn = createStyled.bind() as unknown as JsxFactory;

const cache = new Map();

const dittoImpl = new Proxy(styledFn, {
  apply(_, __, args) {
    // @ts-ignore
    return styledFn(...args);
  },
  get(_, el) {
    if (!cache.has(el)) {
      cache.set(el, styledFn(el as any));
    }
    return cache.get(el);
  },
});

export const ditto = dittoImpl as unknown as StyledFactoryFn;

const mergeCva = (cvaA: any, cvaB: any) => {
  if (cvaA && !cvaB) return cvaA;
  if (!cvaA && cvaB) return cvaB;
  return cvaA.merge(cvaB);
};
