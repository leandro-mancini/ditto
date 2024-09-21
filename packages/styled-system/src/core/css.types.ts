import { PropertiesFallback } from "csstype"
import { Conditions } from "./generated/conditions.gen"
import { CssVarProperties, SystemProperties } from "./generated/system.gen"
import { AnySelector, Selectors } from "./selectors"

export type Condition = keyof Conditions

export type SystemStyleObject = Nested<SystemProperties & CssVarProperties>

export type Nested<P> = P & {
    [K in Selectors]?: Nested<P>
} & {
    [K in AnySelector]?: Nested<P>
} & {
    [K in keyof Conditions]?: Nested<P>
}

export type MinimalNested<P> = {
    [K in keyof Conditions]?: Nested<P>
}

export type ConditionalValue<V> =
  | V
  | Array<V | null>
  | {
      [K in keyof Conditions]?: ConditionalValue<V>
    }

export interface CssKeyframes {
    [name: string]: {
        [time: string]: CssProperties
    }
}

export type KeyframeIdentityFn = (keyframes: CssKeyframes) => CssKeyframes

export interface GlobalStyleObject {
    [selector: string]: SystemStyleObject
}

export type GlobalStyleIdentityFn = (
    global: GlobalStyleObject,
) => GlobalStyleObject

export type SystemStyleIdentityFn = (
    style: SystemStyleObject,
) => SystemStyleObject

type FilterStyleObject<P extends string> = {
    [K in P]?: K extends keyof SystemStyleObject ? SystemStyleObject[K] : unknown
}

export type CompositionStyleObject<Property extends string> = Nested<
  FilterStyleObject<Property> & CssVarProperties
>

export interface CssProperties
  extends PropertiesFallback<String | Number>,
    CssVarProperties {
  initialLetterAlign?: String
}