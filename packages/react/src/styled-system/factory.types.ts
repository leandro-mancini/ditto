import { ComponentProps, ComponentPropsWithoutRef, ElementType, FunctionComponent } from "react";
import { Dict, DistributiveOmit, DistributiveUnion, Pretty } from "../utils";
import { Assign } from "@ark-ui/react";
import { CssVarProperties, SystemProperties } from "./generated/system.gen";
import { MinimalNested, Nested } from "./css.types";
import { RecipeDefinition, RecipeSelection, RecipeVariantRecord } from "./recipe.types";

export interface HtmlProps {
  htmlSize?: number
  htmlWidth?: string | number
  htmlHeight?: string | number
  htmlTranslate?: "yes" | "no" | undefined
  htmlContent?: string
}
  
export type HtmlProp =
  | "color"
  | "size"
  | "translate"
  | "transition"
  | "width"
  | "height"
  | "content"

type PatchHtmlProps<T> = DistributiveOmit<T, HtmlProp> & HtmlProps

type JsxHtmlProps<T extends Dict, P extends Dict = {}> = Assign<
  PatchHtmlProps<T>,
  P
>

export type HTMLChakraProps<
  T extends ElementType,
  P extends Dict = {},
> = JsxHtmlProps<
  ComponentPropsWithoutRef<T>,
  Assign<JsxStyleProps, P> & PolymorphicProps
>

export interface PolymorphicProps {
  as?: ElementType
  asChild?: boolean
}

export type SystemStyleObject = Nested<SystemProperties & CssVarProperties>

export interface JsxStyleProps
  extends SystemProperties, MinimalNested<SystemStyleObject> {
  css?:
    | SystemStyleObject
    | undefined
    | Omit<(SystemStyleObject | undefined)[], keyof any[]>
}

export type ChakraComponent<
  T extends ElementType,
  P extends Dict = {},
> = FunctionComponent<HTMLChakraProps<T, P> & { ref?: any }>

export type DataAttr = Record<
  `data-${string}`,
  string | number | undefined | null | boolean
>

export interface JsxFactoryOptions<TProps> {
  forwardProps?: string[]
  defaultProps?: TProps & DataAttr
  forwardAsChild?: boolean
  shouldForwardProp?(prop: string, variantKeys: string[]): boolean
}

type JsxElements = {
  [K in keyof JSX.IntrinsicElements]: ChakraComponent<K, {}>
}

export type JsxElement<T extends ElementType, P extends Dict> =
  T extends ChakraComponent<infer A, infer B>
    ? ChakraComponent<A, Pretty<DistributiveUnion<P, B>>>
    : ChakraComponent<T, P>

export interface JsxFactory {
  <T extends ElementType>(component: T): ChakraComponent<T, {}>
  <T extends ElementType, P extends RecipeVariantRecord>(
    component: T,
    recipe: RecipeDefinition<P>,
    options?: JsxFactoryOptions<Assign<ComponentProps<T>, RecipeSelection<P>>>,
  ): JsxElement<T, RecipeSelection<P>>
}

export type StyledFactoryFn = JsxFactory & JsxElements