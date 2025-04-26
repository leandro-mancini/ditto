import {
  createSystem,
  defaultThemeConfig,
  mergeConfigs,
} from '@dittox/styled-system';
import { defaultBaseConfig } from './preset-base';

export const defaultConfig = mergeConfigs(
  defaultBaseConfig,
  defaultThemeConfig
);

export const defaultSystem = createSystem(defaultConfig);

export { defaultSystem as system };
