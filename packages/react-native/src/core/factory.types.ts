import {
  CssVarProperties,
  Dict,
  DistributiveOmit,
  DistributiveUnion,
  MinimalNested,
  Pretty,
  RecipeDefinition,
  RecipeSelection,
  RecipeVariantRecord,
  SystemProperties,
} from '@dittox/styled-system';
import { Nested } from '@dittox/styled-system/core/css.types';

export type Assign<T, U> = Omit<T, keyof U> & U;

export interface HtmlProps {
  htmlSize?: number;
  htmlWidth?: string | number;
  htmlHeight?: string | number;
  htmlTranslate?: 'yes' | 'no' | undefined;
  htmlContent?: string;
}

export type HtmlProp =
  | 'color'
  | 'size'
  | 'translate'
  | 'transition'
  | 'width'
  | 'height'
  | 'content';

type PatchHtmlProps<T> = DistributiveOmit<T, HtmlProp> & HtmlProps;

type JsxHtmlProps<T extends Dict, P extends Dict = {}> = Assign<
  PatchHtmlProps<T>,
  P
>;

export type HTMLDittoProps<
  T extends string,
  P extends Dict = {}
> = JsxHtmlProps<
  Record<string, any>,
  Assign<JsxStyleProps, P> & PolymorphicProps
>;

export interface PolymorphicProps {
  as?: string;
  asChild?: boolean;
}

export type SystemStyleObject = Nested<SystemProperties & CssVarProperties>;

export interface JsxStyleProps
  extends SystemProperties,
    MinimalNested<SystemStyleObject> {
  css?:
    | SystemStyleObject
    | undefined
    | Omit<(SystemStyleObject | undefined)[], keyof any[]>;
}

export type DittoComponent<T extends string, P extends Dict = {}> = (
  props: HTMLDittoProps<T, P> & { ref?: any }
) => string;

export type DataAttr = Record<
  `data-${string}`,
  string | number | undefined | null | boolean
>;

export interface JsxFactoryOptions<TProps> {
  forwardProps?: string[];
  defaultProps?: TProps & DataAttr;
  forwardAsChild?: boolean;
  shouldForwardProp?(prop: string, variantKeys: string[]): boolean;
}

export type JsxElement<
  T extends string,
  P extends Dict
> = T extends DittoComponent<infer A, infer B>
  ? DittoComponent<A, Pretty<DistributiveUnion<P, B>>>
  : DittoComponent<T, P>;

export interface JsxFactory {
  <T extends string>(component: T): DittoComponent<T, {}>;
  <T extends string, P extends RecipeVariantRecord>(
    component: T,
    recipe?: RecipeDefinition<P>,
    options?: JsxFactoryOptions<Assign<Record<string, any>, RecipeSelection<P>>>
  ): JsxElement<T, RecipeSelection<P>>;
}

export type StyledFactoryFn = JsxFactory;

export type InferRecipeProps<T> = T extends DittoComponent<any, infer P>
  ? P
  : {};
