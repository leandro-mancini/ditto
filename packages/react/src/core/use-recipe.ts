"use client"

import { useMemo } from "react"
import type { ConfigRecipes, RecipeDefinition, SystemRecipeFn } from "@ditto/styled-system"
import { useDittoContext } from "./provider"

export type RecipeKey = keyof ConfigRecipes | (string & {})

export interface UseRecipeOptions<K extends RecipeKey> {
  key?: K
  recipe?: RecipeDefinition
}

export function useRecipe<K extends RecipeKey>(
  options: UseRecipeOptions<K>,
): K extends keyof ConfigRecipes ? ConfigRecipes[K] : SystemRecipeFn<{}, {}> {
  const { key, recipe: recipeProp } = options
  const sys = useDittoContext()
  return useMemo((): any => {
    const recipe = recipeProp || (key != null ? sys.getRecipe(key) : {})
    return sys.cva(structuredClone(recipe))
  }, [key, recipeProp, sys])
}
