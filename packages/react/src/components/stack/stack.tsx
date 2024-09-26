'use client';

import {
  Children,
  Fragment,
  cloneElement,
  forwardRef,
  isValidElement,
  useMemo,
} from 'react';
import type { StackDirection } from './get-separator-style';
import { getSeparatorStyles } from './get-separator-style';
import { cx, HTMLDittoProps, SystemStyleObject } from '@dittox/styled-system';
import { ditto } from '../../core';

function getValidChildren(children: React.ReactNode) {
  return Children.toArray(children).filter((child) =>
    isValidElement(child)
  ) as React.ReactElement[];
}

interface StackOptions {
  /**
   * Shorthand for `alignItems` style prop
   * @type SystemStyleObject["alignItems"]
   */
  align?: SystemStyleObject['alignItems'];
  /**
   * Shorthand for `justifyContent` style prop
   * @type SystemStyleObject["justifyContent"]
   */
  justify?: SystemStyleObject['justifyContent'];
  /**
   * Shorthand for `flexWrap` style prop
   * @type SystemStyleObject["flexWrap"]
   */
  wrap?: SystemStyleObject['flexWrap'];
  /**
   * The direction to stack the items.
   * @default "column"
   */
  direction?: StackDirection;
  /**
   * If `true`, each stack item will show a separator
   * @type React.ReactElement
   */
  separator?: React.ReactElement;
}

export interface StackProps extends HTMLDittoProps<'div', StackOptions> {}

export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(
  props,
  ref
) {
  const {
    direction = 'column',
    align,
    justify,
    gap = '0.5rem',
    wrap,
    children,
    separator,
    className,
    ...rest
  } = props;

  const separatorStyle = useMemo(
    () => getSeparatorStyles({ gap, direction }),
    [gap, direction]
  );

  const clones = useMemo(() => {
    if (!separator) return children;
    return getValidChildren(children).map((child, index, arr) => {
      const key = typeof child.key !== 'undefined' ? child.key : index;
      const sep = cloneElement(separator, {
        css: [separatorStyle, separator.props.css],
      });
      return (
        <Fragment key={key}>
          {child}
          {index === arr.length - 1 ? null : sep}
        </Fragment>
      );
    });
  }, [children, separator, separatorStyle]);

  return (
    <ditto.div
      ref={ref}
      display="flex"
      alignItems={align}
      justifyContent={justify}
      flexDirection={direction}
      flexWrap={wrap}
      gap={separator ? undefined : gap}
      className={cx('ditto-stack', className)}
      {...rest}
    >
      {clones}
    </ditto.div>
  );
});
