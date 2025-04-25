import * as React from 'react';
import isPropValid from '@emotion/is-prop-valid';
import { ThemeContext, withEmotionCache } from '@emotion/react';
import { compact, mergeProps, mergeRefs } from '@ditto/styled-system';
import { StyleSheet } from 'react-native';
import { useDittoContext } from './provider';
import { useResolvedProps } from './use-resolved-props';
import { StyledFactoryFn, JsxFactory } from './factory.types';

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

const createStyled = (tag: any, configOrCva: any = {}, options: any = {}) => {
  if (typeof tag === 'string') {
    throw new Error(
      'Você está tentando criar um componente com um elemento de string, o que não é suportado no React Native. Use um componente nativo como View, Text, etc.'
    );
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

  const Styled: any = withEmotionCache((inProps: any, cache, ref) => {
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

    const propsWithDefault = React.useMemo(
      () => Object.assign({}, options.defaultProps, compact(inProps)),
      [inProps]
    );

    const { props, styles: styleProps } = useResolvedProps(
      propsWithDefault,
      cvaRecipe,
      defaultShouldForwardProp
    );

    const shouldUseAs = !defaultShouldForwardProp('as');

    // @ts-ignore
    let FinalTag = props.as || baseTag;

    let mergedProps: any = props;
    //@ts-ignore
    if (props.theme == null) {
      mergedProps = {};
      for (let key in props) {
        //@ts-ignore
        mergedProps[key] = props[key];
      }
      mergedProps.theme = React.useContext(ThemeContext);
    }

    // @ts-ignore
    if (props.theme == null) {
      mergedProps.theme = React.useContext(ThemeContext);
    }

    const finalShouldForwardProp =
      shouldUseAs && shouldForwardProp === undefined
        ? initShouldForwardProp
        : defaultShouldForwardProp;

    const nativeStyle = StyleSheet.create({
      style: styleProps,
    });

    let newProps: any = {};

    for (let key in props) {
      if (shouldUseAs && key === 'as') continue;

      if (finalShouldForwardProp(key)) {
        //@ts-ignore
        newProps[key] = props[key];
      }
    }

    newProps.ref = ref;
    // @ts-ignore
    newProps.style = [nativeStyle.style, props.style];

    //@ts-ignore
    if (props.asChild && !options.forwardAsChild) {
      const child = React.Children.only(props.children);
      FinalTag = child.type;
      newProps.children = null;
      newProps = mergeProps(newProps, child.props);
      newProps.ref = mergeRefs(ref, child.ref);
    }

    return <FinalTag {...newProps} />;
  });

  Styled.displayName =
    identifierName !== undefined
      ? identifierName
      : `Styled(${baseTag.displayName || baseTag.name || 'Component'})`;

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
