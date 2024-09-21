"use client"

import { HTMLDittoProps } from "@ditto/styled-system"
import { ditto } from "../../core"

export interface StackSeparatorProps extends HTMLDittoProps<"div"> {}

export const StackSeparator = ditto("div", {
  base: {
    borderWidth: 0,
    alignSelf: "stretch",
    borderColor: "inherit",
    width: "auto",
    height: "auto",
  },
})

StackSeparator.displayName = "StackSeparator"
