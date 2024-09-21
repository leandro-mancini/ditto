"use client"

import { forwardRef } from "react"
import { Stack, type StackProps } from "./stack"

export const VStack = forwardRef<HTMLDivElement, StackProps>(
  function VStack(props, ref) {
    return <Stack align="center" {...props} direction="column" ref={ref} />
  },
)
