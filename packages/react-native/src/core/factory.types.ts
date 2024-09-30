import {
  ConditionalValue,
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
  ComponentType,
  ElementType,
  FunctionComponent,
} from 'react';
import {
  Button,
  Image,
  ImageProps,
  ScrollView,
  ScrollViewProps,
  TextInput,
  TextInputProps,
  TextProps,
  View,
  ViewProps,
} from 'react-native';

type Merge<T, P> = P & Omit<TextInput, keyof P>;

export interface UnstyledProp {
  /**
   * If `true`, the element will opt out of the theme styles.
   */
  unstyled?: boolean;
}

export interface PolymorphicProps {
  as?: ComponentType;
  asChild?: boolean;
}

export interface NativeProps {
  size?: number;
  width?: string | number;
  height?: string | number;
  translate?: 'yes' | 'no';
  content?: string;
}

export type Assign<T, U> = Omit<T, keyof U> & U;
type PatchNativeProps<T> = Omit<T, 'size' | 'width' | 'height' | 'content'> &
  NativeProps;

type JsxNativeProps<T extends Dict, P extends Dict = {}> = Assign<
  PatchNativeProps<T>,
  P
>;

export type DittoComponent<
  T extends ComponentType<any>,
  P extends Dict = {}
> = FunctionComponent<NativeDittoProps<T, P> & { ref?: any }>;

export type NativeDittoProps<
  T extends ComponentType,
  P extends Dict = {}
> = JsxNativeProps<
  ComponentPropsWithoutRef<T>,
  Assign<JsxStyleProps & SystemStyleObject, P> &
    PolymorphicProps & { mancini?: any }
>;

export type JsxElement<
  T extends ComponentType,
  P extends Dict
> = T extends DittoComponent<infer A, infer B>
  ? DittoComponent<A, Pretty<DistributiveUnion<P, B>>>
  : DittoComponent<T, P>;

export interface JsxFactory {
  <T extends ComponentType>(component: T): DittoComponent<T, {}>;
  <T extends ComponentType, P extends RecipeVariantRecord>(
    component: T,
    recipe: RecipeDefinition<P>,
    options?: JsxFactoryOptions<Assign<ComponentProps<T>, RecipeSelection<P>>>
  ): JsxElement<T, RecipeSelection<P>>;
}

type ReactNativeIntrinsicElements = {
  view: ComponentType<View>;
  text: ComponentType<Text>;
  image: ComponentType<Image>;
  scrollView: ComponentType<ScrollView>;
  textInput: ComponentType<TextInput>;
  button: ComponentType<Button>;
};

type JsxElements = {
  [K in keyof ReactNativeIntrinsicElements]: DittoComponent<
    ReactNativeIntrinsicElements[K],
    {}
  >;
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

interface NativeSystemProperties {
  // Dimensões
  width?: ConditionalValue<number | string | AnyString>;
  height?: ConditionalValue<number | string | AnyString>;
  minWidth?: ConditionalValue<number | string | AnyString>;
  minHeight?: ConditionalValue<number | string | AnyString>;
  maxWidth?: ConditionalValue<number | string | AnyString>;
  maxHeight?: ConditionalValue<number | string | AnyString>;

  // Espaçamento
  margin?: ConditionalValue<number | string | AnyString>;
  marginTop?: ConditionalValue<number | string | AnyString>;
  marginRight?: ConditionalValue<number | string | AnyString>;
  marginBottom?: ConditionalValue<number | string | AnyString>;
  marginLeft?: ConditionalValue<number | string | AnyString>;
  marginHorizontal?: ConditionalValue<number | string | AnyString>;
  marginVertical?: ConditionalValue<number | string | AnyString>;
  padding?: ConditionalValue<number | string | AnyString>;
  paddingTop?: ConditionalValue<number | string | AnyString>;
  paddingRight?: ConditionalValue<number | string | AnyString>;
  paddingBottom?: ConditionalValue<number | string | AnyString>;
  paddingLeft?: ConditionalValue<number | string | AnyString>;
  paddingHorizontal?: ConditionalValue<number | string | AnyString>;
  paddingVertical?: ConditionalValue<number | string | AnyString>;

  // Posições
  position?: ConditionalValue<'absolute' | 'relative'>;
  top?: ConditionalValue<number | string | AnyString>;
  right?: ConditionalValue<number | string | AnyString>;
  bottom?: ConditionalValue<number | string | AnyString>;
  left?: ConditionalValue<number | string | AnyString>;
  zIndex?: ConditionalValue<number>;

  // Display e flexbox
  display?: ConditionalValue<'none' | 'flex'>;
  flexDirection?: ConditionalValue<
    'row' | 'column' | 'row-reverse' | 'column-reverse'
  >;
  justifyContent?: ConditionalValue<
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  >;
  alignItems?: ConditionalValue<
    'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  >;
  flexWrap?: ConditionalValue<'wrap' | 'nowrap' | 'wrap-reverse'>;
  flex?: ConditionalValue<number>;
  flexGrow?: ConditionalValue<number>;
  flexShrink?: ConditionalValue<number>;
  flexBasis?: ConditionalValue<number | string | AnyString>;
  alignSelf?: ConditionalValue<
    'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  >;

  // Propriedades de borda
  borderWidth?: ConditionalValue<number | string | AnyString>;
  borderTopWidth?: ConditionalValue<number | string | AnyString>;
  borderRightWidth?: ConditionalValue<number | string | AnyString>;
  borderBottomWidth?: ConditionalValue<number | string | AnyString>;
  borderLeftWidth?: ConditionalValue<number | string | AnyString>;
  borderColor?: ConditionalValue<string>;
  borderRadius?: ConditionalValue<number | string | AnyString>;
  borderTopLeftRadius?: ConditionalValue<number | string | AnyString>;
  borderTopRightRadius?: ConditionalValue<number | string | AnyString>;
  borderBottomLeftRadius?: ConditionalValue<number | string | AnyString>;
  borderBottomRightRadius?: ConditionalValue<number | string | AnyString>;

  // Background e cores
  backgroundColor?: ConditionalValue<string>;
  opacity?: ConditionalValue<number>;

  // Sombras
  shadowColor?: ConditionalValue<string>;
  shadowOffset?: ConditionalValue<{ width: number; height: number }>;
  shadowOpacity?: ConditionalValue<number>;
  shadowRadius?: ConditionalValue<number>;

  // Outros
  overflow?: ConditionalValue<'visible' | 'hidden' | 'scroll'>;
  elevation?: ConditionalValue<number>; // Exclusivo para Android
  transform?: ConditionalValue<string>; // Para rotação, escala, etc.

  // Propriedades de texto
  fontSize?: ConditionalValue<number | string | AnyString>;
  fontWeight?: ConditionalValue<
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
  >;
  lineHeight?: ConditionalValue<number | string | AnyString>;
  letterSpacing?: ConditionalValue<number | string | AnyString>;
  textAlign?: ConditionalValue<
    'auto' | 'left' | 'right' | 'center' | 'justify'
  >;
  color?: ConditionalValue<string>;
  // color?: ConditionalValue<UtilityValues["color"] | CssProperties["color"] | AnyString>;
  // color?: ConditionalValue<Merge<UtilityValues["color"], CssProperties["color"]>>;
  // color?: ConditionalValue<CssProperties["color"] | AnyString>;
  fontFamily?: ConditionalValue<string>;
}

type AnyString = string & {};
