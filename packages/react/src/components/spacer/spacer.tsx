"use client"

import { HTMLDittoProps } from "@ditto/styled-system"
import { ditto } from "../../core"

export interface SpacerProps extends HTMLDittoProps<"div"> {}

export const Spacer = ditto("div", {
  base: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch",
  },
})

Spacer.displayName = "Spacer"
