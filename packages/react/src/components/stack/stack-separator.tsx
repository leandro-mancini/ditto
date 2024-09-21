"use client"

import { HTMLChakraProps } from "@ditto/styled-system"
import { chakra } from "../../core"

export interface StackSeparatorProps extends HTMLChakraProps<"div"> {}

export const StackSeparator = chakra("div", {
  base: {
    borderWidth: 0,
    alignSelf: "stretch",
    borderColor: "inherit",
    width: "auto",
    height: "auto",
  },
})

StackSeparator.displayName = "StackSeparator"
