'use client';

import { SystemStyleObject } from '@ditto/styled-system';
import { forwardRef } from 'react';
import { ditto, HTMLDittoProps } from '../../core';

export interface GridOptions {
  templateColumns?: SystemStyleObject['gridTemplateColumns'];
  autoFlow?: SystemStyleObject['gridAutoFlow'];
  autoRows?: SystemStyleObject['gridAutoRows'];
  autoColumns?: SystemStyleObject['gridAutoColumns'];
  templateRows?: SystemStyleObject['gridTemplateRows'];
  templateAreas?: SystemStyleObject['gridTemplateAreas'];
  column?: SystemStyleObject['gridColumn'];
  row?: SystemStyleObject['gridRow'];
  inline?: boolean;
}

export interface GridProps
  extends Omit<HTMLDittoProps<'div'>, keyof GridOptions>,
    GridOptions {}

export const Grid = forwardRef<HTMLDivElement, GridProps>(function Grid(
  props,
  ref
) {
  const {
    templateAreas,
    column,
    row,
    autoFlow,
    autoRows,
    templateRows,
    autoColumns,
    templateColumns,
    inline,
    ...rest
  } = props;

  return (
    <ditto.div
      {...rest}
      ref={ref}
      css={[
        {
          display: inline ? 'inline-grid' : 'grid',
          gridTemplateAreas: templateAreas,
          gridAutoColumns: autoColumns,
          gridColumn: column,
          gridRow: row,
          gridAutoFlow: autoFlow,
          gridAutoRows: autoRows,
          gridTemplateRows: templateRows,
          gridTemplateColumns: templateColumns,
        },
        props.css,
      ]}
    />
  );
});
