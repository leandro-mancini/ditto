'use client';

import { SystemStyleObject } from '@ditto/styled-system';
import { ComponentType, forwardRef } from 'react';
import { ditto, NativeDittoProps } from '../../core';
import { View, ViewProps } from 'react-native';

export interface FlexOptions {
  align?: SystemStyleObject['alignItems'];
  justify?: SystemStyleObject['justifyContent'];
  wrap?: SystemStyleObject['flexWrap'];
  direction?: SystemStyleObject['flexDirection'];
  basis?: SystemStyleObject['flexBasis'];
  grow?: SystemStyleObject['flexGrow'];
  shrink?: SystemStyleObject['flexShrink'];
  inline?: boolean;
}

export interface FlexProps
  extends NativeDittoProps<ComponentType<ViewProps>, FlexOptions> {}

const FlexComponent = ditto(View, {
  base: {
    display: 'flex',
  },
});

export const Flex = forwardRef<View, FlexProps>(function Flex(props, ref) {
  const {
    direction,
    align,
    justify,
    wrap,
    basis,
    grow,
    shrink,
    inline,
    ...rest
  } = props;

  return (
    <FlexComponent
      ref={ref}
      {...rest}
      flexDirection={direction}
      alignItems={align}
      justifyContent={justify}
      flexWrap={wrap}
      flexBasis={basis}
      flexGrow={grow}
      flexShrink={shrink}
    />
  );
});
