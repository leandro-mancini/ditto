import { Conditions } from "./generated/conditions.gen"
import { AnySelector, Selectors } from "./selectors"
import { CssProperties } from "./types"

export type Condition = keyof Conditions

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