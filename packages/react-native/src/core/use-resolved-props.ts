import { useMemo } from 'react';
import { useDittoContext } from './provider';
import { splitProps } from '@dittox/styled-system';

export function useResolvedProps(
  inProps: any,
  cvaRecipe: any,
  shouldForwardProps: any
) {
  const { style, isValidProperty } = useDittoContext();
  const { children, ...props } = inProps;

  const result = useMemo(() => {
    const [forwardedProps, restProps_A] = splitProps(props, (key) =>
      shouldForwardProps(key, cvaRecipe.variantKeys)
    );

    const [variantProps, restProps_B] = splitProps(
      restProps_A,
      cvaRecipe.variantKeys
    );

    const [styleProps, elementProps] = splitProps(restProps_B, isValidProperty);

    return {
      forwardedProps,
      variantProps,
      styleProps,
      elementProps,
    };
  }, [cvaRecipe.variantKeys, shouldForwardProps, props, isValidProperty]);

  const { css: cssStyles, ...propStyles } = result.styleProps;

  const cvaStyles = useMemo(
    () => cvaRecipe(result.variantProps),
    [cvaRecipe, result.variantProps]
  );

  const styles = useMemo((): any => {
    return style(cvaStyles, ...toArray(cssStyles), propStyles);
  }, [style, cvaStyles, cssStyles, propStyles]);

  return {
    styles,
    props: {
      ...result.forwardedProps,
      ...result.elementProps,
      children,
    },
  };
}

const toArray = (val: any) => {
  const res = Array.isArray(val) ? val : [val];
  return res.filter(Boolean).flat();
};
