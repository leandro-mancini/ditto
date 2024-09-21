"use client"

import { HTMLChakraProps } from "@ditto/styled-system"
import { chakra } from "../../core"

export interface AbsoluteCenterProps extends HTMLChakraProps<"div"> {
  axis?: "horizontal" | "vertical" | "both"
}

export const AbsoluteCenter = chakra("div", {
  base: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  variants: {
    axis: {
      horizontal: {
        insetStart: "50%",
        transform: "translateX(-50%)",
      },
      vertical: {
        top: "50%",
        transform: "translateY(-50%)",
      },
      both: {
        insetStart: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      },
    },
  },
  defaultVariants: {
    axis: "both",
  },
})
