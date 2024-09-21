import { mergeWith } from "../utils"
import { CompositionStyles } from "./composition"
import { GlobalStyleIdentityFn, KeyframeIdentityFn, SystemStyleIdentityFn } from "./css.types"
import { RecipeIdentityFn, SlotRecipeIdentityFn } from "./recipe.types"
import { SystemConfig } from "./types"

export const defineConditions = <T extends Record<string, string>>(v: T): T => v

export const defineRecipe: RecipeIdentityFn = (v) => v

export const defineSlotRecipe: SlotRecipeIdentityFn = (v) => v

export const defineKeyframes: KeyframeIdentityFn = (v) => v

export const defineGlobalStyles: GlobalStyleIdentityFn = (v) => v

export const defineStyle: SystemStyleIdentityFn = (v) => v

export const defineTextStyles = (v: CompositionStyles["textStyles"]) => v

export const defineAnimationStyles = (
  v: CompositionStyles["animationStyles"],
) => v

export const defineLayerStyles = (v: CompositionStyles["layerStyles"]) => v

export const defineConfig = (v: SystemConfig) => v

export const mergeConfigs = (...configs: SystemConfig[]): SystemConfig => {
  return mergeWith({}, ...configs)
}