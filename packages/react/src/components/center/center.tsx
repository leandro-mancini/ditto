"use client"

import { HTMLChakraProps } from "@ditto/styled-system"
import { chakra } from "../../core"

export interface CenterProps extends HTMLChakraProps<"div"> {}

export const Center = chakra("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  variants: {
    inline: {
      true: {
        display: "inline-flex",
      },
    },
  },
})

Center.displayName = "Center"
