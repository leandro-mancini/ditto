import { PropertiesFallback } from "csstype"
import { Dict, DistributiveOmit } from "../utils"
import { SystemStyleObject } from "./factory.types"
import { ConditionalValue, CssKeyframes, Nested } from "./css.types"
import { RecipeCreatorFn, RecipeDefinition, SlotRecipeConfig, SlotRecipeCreatorFn } from "./recipe.types"

export type TokenCategory =
  | "zIndex"
  | "opacity"
  | "colors"
  | "fonts"
  | "fontSizes"
  | "fontWeights"
  | "lineHeights"
  | "letterSpacings"
  | "sizes"
  | "shadows"
  | "spacing"
  | "radii"
  | "borders"
  | "durations"
  | "easings"
  | "animations"
  | "blurs"
  | "gradients"
  | "assets"
  | "borderWidths"
  | "breakpoints"
  | "borderStyles"
  | "aspectRatios"

type ThemeFn = (token: (path: string) => any) => Record<string, string>

interface UtilityTokenFn {
    (path: string): string | undefined
    raw: (path: string) => Token | undefined
}

export interface BreakpointEntry {
    name: string
    min?: string | null
    max?: string | null
}

export interface Breakpoint {
    up(key: string): string
    down(key: string): string
    only(key: string): string
    keys(): string[]
    values: BreakpointEntry[]
    conditions: Dict
    getCondition(key: string): string
}

export type CssFn = (
    ...styles: (SystemStyleObject | undefined)[]
) => SystemStyleObject

export interface SystemContext {
    $$ditto: true
    _config: SystemConfig
    utility: Utility
    conditions: Condition
    tokens: TokenDictionary
    breakpoints: Breakpoint
    properties: Set<string>
    isValidProperty(prop: string): boolean
    normalizeValue(value: any): any
    splitCssProps<T extends SystemStyleObject>(
      props: T,
    ): [SystemStyleObject, DistributiveOmit<T, keyof SystemStyleObject>]
    getTokenCss(): Dict
    getGlobalCss(): Dict
    getPreflightCss(): Dict
    css: CssFn
    cva: RecipeCreatorFn
    sva: SlotRecipeCreatorFn
    getRecipe(key: string, fallback?: any): any
    getSlotRecipe(key: string, fallback?: any): any
    isRecipe(key: string): boolean
    isSlotRecipe(key: string): boolean
    hasRecipe(key: string): boolean
    token: TokenFn
}

export interface TokenDictionary extends TokenFormatOptions {
    prefix: string
    allTokens: Token[]
    tokenMap: Map<string, Token>
    flatMap: Map<string, string>
    cssVarMap: Map<string, Map<string, string>>
    categoryMap: Map<string, Map<string, Token>>
    colorPaletteMap: Map<string, Map<string, string>>
    registerToken(token: Token, phase?: TokenEnforcePhase): void
    getVar(value: string, fallback?: string): string | undefined
    getCategoryValues(category: string): Dict
    getByName(name: string): Token | undefined
    expandReferenceInValue(value: string): string
}

export type TokenEnforcePhase = "pre" | "post"

export interface TokenFormatOptions {
    formatTokenName(path: string[]): string
    formatCssVar(path: string[], prefix: string): TokenCssVar
}

export interface TokenCssVar {
    var: string
    ref: string
}

export interface Utility {
    keys(): string[]
    shorthands: Map<string, string>
    hasShorthand: boolean
    resolveShorthand(key: string): string
    transform(key: string, value: any): Dict | undefined
    register(property: string, config: UtilityPropertyConfig): void
    getTypes(): Map<string, string[]>
    addPropertyType(property: string, type: string[]): void
}

export interface TokenFn {
    (path: string, fallback?: any): any
    var(path: string, fallback?: any): any
}

export interface ThemingConfig {
    breakpoints?: Record<string, string>
    keyframes?: CssKeyframes
    tokens?: TokenDefinition
    semanticTokens?: SemanticTokenDefinition
    textStyles?: Record<string, Dict>
    layerStyles?: Record<string, Dict>
    animationStyles?: Record<string, Dict>
    recipes?: Record<string, RecipeDefinition>
    slotRecipes?: Record<string, SlotRecipeConfig>
}

export type TokenDefinition = {
    [key in TokenCategory]?: Recursive<TokenSchema<PrimitiveTokenValue>>
}

interface Recursive<T> {
    [key: string]: T | Recursive<T>
}

export interface TokenSchema<T = any> {
    value: T
    description?: string
}

type PrimitiveTokenValue = string | number

export type SemanticTokenDefinition = {
    [key in TokenCategory]?: Recursive<
      TokenSchema<PrimitiveTokenValue | Record<string, PrimitiveTokenValue>>
    >
}

export interface ColorMixResult {
    invalid: boolean
    value: string
    color?: string
}

export interface TransformUtils {
    colorMix(value: string): ColorMixResult
}

export interface TransformArgs<T = any> {
    token: UtilityTokenFn
    raw: T
    utils: TransformUtils
}

export type CssVarProperties = {
    [key in `--${string}`]?: ConditionalValue<string | number>
}

export interface CssProperties
  extends PropertiesFallback<String | Number>,
    CssVarProperties {}

export type PropertyTransform = (
    value: any,
    args: TransformArgs,
) => Nested<CssProperties> | undefined
  
export type PropertyValues =
    | TokenCategory
    | string[]
    | { type: string }
    | Record<string, string>
    | ThemeFn

export interface UtilityPropertyConfig {
    /**
     * The css style object this property will generate.
     */
    transform?: PropertyTransform
    /**
     * The possible values this property can have.
     */
    values?: PropertyValues
    /**
     * The css property this utility maps to.
     */
    property?: CssProperty
    /**
     * The shorthand of the property.
     */
    shorthand?: string | string[]
}

export type CssProperty = keyof PropertiesFallback

export type UtilityConfig = {
    [property in CssProperty]?: UtilityPropertyConfig
} & {
    [property: string]: UtilityPropertyConfig
}

export interface PreflightConfig {
    preflight?: boolean | { scope?: string; level?: "parent" | "element" }
}

export interface SystemConfig extends PreflightConfig {
    cssVarsRoot?: string
    cssVarsPrefix?: string
    globalCss?: Record<string, SystemStyleObject>
    theme?: ThemingConfig
    utilities?: UtilityConfig
    conditions?: Dict
    strictTokens?: boolean
}

interface ColorPaletteExtension {
    value: string
    roots: string[][]
    keys: string[][]
}

export interface TokenExtensions {
    originalPath: string[]
    category: string
    prop: string
    default?: boolean
    condition?: string
    virtual?: boolean
    negative?: boolean
    conditions?: Dict
    cssVar?: TokenCssVar
    colorPalette?: ColorPaletteExtension
    references?: Dict<Token>
    pixelValue?: string
}
  

export interface Token<T = any> {
    value: T
    description?: string
    originalValue: any
    name: string
    path: string[]
    extensions: TokenExtensions
}

export interface TokenTransformer {
    name: string
    enforce: TokenEnforcePhase
    type: "value" | "name" | "extensions"
    match?(token: Token): boolean
    transform(token: Token, dictionary: TokenDictionary): any
}

export interface TokenMiddleware {
    enforce: TokenEnforcePhase
    transform(dict: TokenDictionary): void
}

export interface ConditionConfig {
    breakpoints: Breakpoint
    conditions: Dict
}

export interface Condition {
    keys(): string[]
    sort(paths: string[]): string[]
    has(key: string): boolean
    resolve(key: string): string
    breakpoints: string[]
    expandAtRule(key: string): string
}