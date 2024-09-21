"use client"

import { type HTMLDittoProps } from "@ditto/styled-system"
import { ditto } from "../../core"

export interface BoxProps extends HTMLDittoProps<"div"> {}

export const Box = ditto("div")

Box.displayName = "Box"
