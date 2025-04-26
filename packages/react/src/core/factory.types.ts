import {
  Dict,
  DistributiveOmit,
  DistributiveUnion,
  MinimalNested,
  Pretty,
  RecipeDefinition,
  RecipeSelection,
  RecipeVariantRecord,
  SystemProperties,
  SystemStyleObject,
} from '@dittox/styled-system';
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementType,
  FunctionComponent,
} from 'react';

export interface UnstyledProp {
  /**
   * If `true`, the element will opt out of the theme styles.
   */
  unstyled?: boolean;
}

export interface PolymorphicProps {
  as?: ElementType;
  asChild?: boolean;
}

export interface HtmlProps {
  htmlSize?: number;
  htmlWidth?: string | number;
  htmlHeight?: string | number;
  htmlTranslate?: 'yes' | 'no' | undefined;
  htmlContent?: string;
}

export type Assign<T, U> = Omit<T, keyof U> & U;

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

export type DittoComponent<
  T extends ElementType,
  P extends Dict = {}
> = FunctionComponent<HTMLDittoProps<T, P> & { ref?: any }>;

export type HTMLDittoProps<
  T extends ElementType,
  P extends Dict = {}
> = JsxHtmlProps<
  ComponentPropsWithoutRef<T>,
  Assign<JsxStyleProps, P> & PolymorphicProps
>;

export type JsxElement<
  T extends ElementType,
  P extends Dict
> = T extends DittoComponent<infer A, infer B>
  ? DittoComponent<A, Pretty<DistributiveUnion<P, B>>>
  : DittoComponent<T, P>;

export interface JsxFactory {
  <T extends ElementType>(component: T): DittoComponent<T, {}>;
  <T extends ElementType, P extends RecipeVariantRecord>(
    component: T,
    recipe: RecipeDefinition<P>,
    options?: JsxFactoryOptions<Assign<ComponentProps<T>, RecipeSelection<P>>>
  ): JsxElement<T, RecipeSelection<P>>;
}

type JsxElements = {
  [K in keyof JSX.IntrinsicElements]: DittoComponent<K, {}>;
};

export type StyledFactoryFn = JsxFactory & JsxElements;

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

export interface JsxStyleProps
  extends SystemProperties,
    MinimalNested<SystemStyleObject> {
  css?:
    | SystemStyleObject
    | undefined
    | Omit<(SystemStyleObject | undefined)[], keyof any[]>;
}

export type InferRecipeProps<T> = T extends DittoComponent<any, infer P>
  ? P
  : {};
