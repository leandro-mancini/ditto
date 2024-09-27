import * as React from 'react';
import isPropValid from '@emotion/is-prop-valid';
import { insertStyles, registerStyles } from '@emotion/utils';
//@ts-ignore
import { useInsertionEffectAlwaysWithSyncFallback } from '@emotion/use-insertion-effect-with-fallbacks';
// import { ThemeContext, withEmotionCache } from "@emotion/react"
// import { serializeStyles } from "@emotion/serialize"

// import {
//   getRegisteredStyles,
//   insertStyles,
//   registerStyles,
// } from "@emotion/utils"
import { JsxFactory, StyledFactoryFn } from '@dittox/styled-system';
import { View } from 'react-native';
// import { useDittoContext } from "./provider"
// import { useResolvedProps } from "./use-resolved-props"

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

// const Insertion = ({ cache, serialized, isStringTag }: any) => {
//   registerStyles(cache, serialized, isStringTag);

//   const rules = useInsertionEffectAlwaysWithSyncFallback(() =>
//     insertStyles(cache, serialized, isStringTag)
//   );

//   if (!isBrowser && rules !== undefined) {
//     let serializedNames = serialized.name;
//     let next = serialized.next;
//     while (next !== undefined) {
//       serializedNames = cx(serializedNames, next.name);
//       next = next.next;
//     }
//     return (
//       <style
//         {...{
//           [`data-emotion`]: cx(cache.key, serializedNames),
//           dangerouslySetInnerHTML: { __html: rules },
//           nonce: cache.sheet.nonce,
//         }}
//       />
//     );
//   }
//   return null;
// };
// function cx(key: any, serializedNames: any) {
//   throw new Error("Function not implemented.");
// }

import styled, { css } from '@emotion/native';

const createStyled = (tag: any, configOrCva: any = {}, options: any = {}) => {
  if (process.env.NODE_ENV !== 'production') {
    if (tag === undefined) {
      throw new Error(
        'Você está tentando criar um elemento estilizado com um componente indefinido.\nVocê pode ter esquecido de importá-lo.'
      );
    }
  }

  console.log('tag', tag);
  console.log('configOrCva', configOrCva);
  console.log('options', options);

  return styled(View)({
    backgroundColor: 'tomato',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
    padding: 24,
  });
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
