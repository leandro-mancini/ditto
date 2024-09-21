"use client"

import { forwardRef } from "react"
import { Stack, type StackProps } from "./stack"

export const HStack = forwardRef<HTMLDivElement, StackProps>(
  function HStack(props, ref) {
    return <Stack align="center" {...props} direction="row" ref={ref} />
  },
)
