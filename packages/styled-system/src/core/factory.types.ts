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

type PatchHtmlProps<T> = Omit<T, HtmlProp> & HtmlProps;

type JsxHtmlProps<
  T extends Record<string, any>,
  P extends Record<string, any> = {}
> = Assign<PatchHtmlProps<T>, P>;

export interface PolymorphicProps {
  as?: string;
  asChild?: boolean;
}

export interface SystemStyleObject {
  [key: string]: any;
}

export type HTMLDittoProps<
  T extends string,
  P extends Record<string, any> = {}
> = JsxHtmlProps<
  Record<string, any>,
  Assign<JsxStyleProps, P> & PolymorphicProps
>;

export interface JsxStyleProps {
  css?: SystemStyleObject | undefined;
  [key: string]: any;
}

export type DittoComponent<
  T extends string,
  P extends Record<string, any> = {}
> = (props: HTMLDittoProps<T, P> & { ref?: any }) => string;

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

export interface JsxFactory {
  <T extends string>(component: T): DittoComponent<T, {}>;
  <T extends string, P extends Record<string, any>>(
    component: T,
    recipe?: RecipeDefinition<P>,
    options?: JsxFactoryOptions<Assign<Record<string, any>, RecipeSelection<P>>>
  ): DittoComponent<T, P>;
}

export type StyledFactoryFn = JsxFactory;

export type InferRecipeProps<T> = T extends DittoComponent<any, infer P>
  ? P
  : {};

export interface RecipeDefinition<P> {}

export type RecipeSelection<P> = P extends Record<string, any> ? P : {};
