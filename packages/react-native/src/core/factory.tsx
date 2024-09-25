// import * as React from "react"
import isPropValid from '@emotion/is-prop-valid';
// import { ThemeContext, withEmotionCache } from "@emotion/react"
// import { serializeStyles } from "@emotion/serialize"
// //@ts-ignore
// import { useInsertionEffectAlwaysWithSyncFallback } from "@emotion/use-insertion-effect-with-fallbacks"
// import {
//   getRegisteredStyles,
//   insertStyles,
//   registerStyles,
// } from "@emotion/utils"
// import { compact, cx, mergeProps, mergeRefs, JsxFactory, StyledFactoryFn } from '@ditto/styled-system'
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
