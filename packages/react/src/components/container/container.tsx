"use client"

import { HTMLDittoProps, RecipeProps } from "@ditto/styled-system"
import { createRecipeContext } from "../../core/create-recipe-context"

const { withContext, PropsProvider } = createRecipeContext({
  key: "container",
})

export interface ContainerBaseProps
  extends RecipeProps<"container"> {}

export interface ContainerProps
  extends HTMLDittoProps<"div", ContainerBaseProps> {}

export const Container = withContext<HTMLDivElement, ContainerProps>("div")

export const ContainerPropsProvider =
  PropsProvider as React.Provider<ContainerBaseProps>
