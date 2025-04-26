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
import { JSX, FunctionComponent } from 'preact'; // Usar preact no lugar de react

export interface UnstyledProp {
  /**
   * If `true`, the element will opt out of the theme styles.
   */
  unstyled?: boolean;
}

export interface PolymorphicProps {
  as?: keyof JSX.IntrinsicElements; // ElementType é substituído por elementos intrínsecos do JSX de Preact
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
  T extends keyof JSX.IntrinsicElements, // Usando preact JSX para ElementType
  P extends Dict = {}
> = FunctionComponent<HTMLDittoProps<T, P> & { ref?: any }>;

export type HTMLDittoProps<
  T extends keyof JSX.IntrinsicElements, // Usando o JSX do Preact
  P extends Dict = {}
> = JsxHtmlProps<
  JSX.IntrinsicElements[T], // Usa as props nativas do Preact
  Assign<JsxStyleProps, P> & PolymorphicProps
>;

export type JsxElement<
  T extends keyof JSX.IntrinsicElements,
  P extends Dict
> = T extends DittoComponent<infer A, infer B>
  ? DittoComponent<A, Pretty<DistributiveUnion<P, B>>>
  : DittoComponent<T, P>;

export interface JsxFactory {
  <T extends keyof JSX.IntrinsicElements>(component: T): DittoComponent<T, {}>;
  <T extends keyof JSX.IntrinsicElements, P extends RecipeVariantRecord>(
    component: T,
    recipe: RecipeDefinition<P>,
    options?: JsxFactoryOptions<
      Assign<JSX.IntrinsicElements[T], RecipeSelection<P>>
    >
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
