"use client"

import { HTMLChakraProps, RecipeProps } from "@ditto/styled-system"
import { createRecipeContext } from "../../core/create-recipe-context"

const { withContext, PropsProvider } = createRecipeContext({
  key: "container",
})

export interface ContainerBaseProps
  extends RecipeProps<"container"> {}

export interface ContainerProps
  extends HTMLChakraProps<"div", ContainerBaseProps> {}

export const Container = withContext<HTMLDivElement, ContainerProps>("div")

export const ContainerPropsProvider =
  PropsProvider as React.Provider<ContainerBaseProps>
