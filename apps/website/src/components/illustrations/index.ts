import { AspectRatioAnatomy } from './aspect-ratio';
import { BoxAnatomy } from './box';
import { CenterAnatomy } from './center';
import { ContainerAnatomy } from './container';
import { FlexAnatomy } from './flex';
// import { ForAnatomy } from "./for"
import { GridAnatomy } from './grid';
// import { ImageAnatomy } from "./image"
// import { PortalAnatomy } from "./portal"
// import { ShowAnatomy } from "./show"
import { StackAnatomy } from './stack';

export const allComponents = {
  'aspect-ratio': AspectRatioAnatomy,
  box: BoxAnatomy,
  center: CenterAnatomy,
  container: ContainerAnatomy,
  flex: FlexAnatomy,
  // for: ForAnatomy,
  grid: GridAnatomy,
  // image: ImageAnatomy,
  // portal: PortalAnatomy,
  // show: ShowAnatomy,
  stack: StackAnatomy,
};

export type ComponentAnatomyName = keyof typeof allComponents;

export function getComponent(name: ComponentAnatomyName | (string & {})) {
  return Reflect.get(allComponents, name);
}
