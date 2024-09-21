"use client"

import { forwardRef } from "react"
import type { BoxProps } from "../box/box"
import { compact, ConditionalValue, mapObject, SystemStyleObject } from "@ditto/styled-system"
import { ditto } from "../../core"

export interface GridItemProps extends BoxProps {
  area?: SystemStyleObject["gridArea"]
  colSpan?: ConditionalValue<number | "auto">
  colStart?: ConditionalValue<number | "auto">
  colEnd?: ConditionalValue<number | "auto">
  rowStart?: ConditionalValue<number | "auto">
  rowEnd?: ConditionalValue<number | "auto">
  rowSpan?: ConditionalValue<number | "auto">
}

function spanFn(span?: ConditionalValue<number | "auto">) {
  return mapObject(span, (value) =>
    value === "auto" ? "auto" : `span ${value}/span ${value}`,
  )
}

export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  function GridItem(props, ref) {
    const {
      area,
      colSpan,
      colStart,
      colEnd,
      rowEnd,
      rowSpan,
      rowStart,
      ...rest
    } = props

    const styles = compact({
      gridArea: area,
      gridColumn: spanFn(colSpan),
      gridRow: spanFn(rowSpan),
      gridColumnStart: colStart,
      gridColumnEnd: colEnd,
      gridRowStart: rowStart,
      gridRowEnd: rowEnd,
    })

    return <ditto.div ref={ref} css={styles} {...rest} />
  },
)
