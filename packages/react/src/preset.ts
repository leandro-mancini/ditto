import { defaultBaseConfig } from "./preset-base"
import { createSystem, mergeConfigs } from '@ditto/styled-system'

export const defaultConfig = mergeConfigs(defaultBaseConfig, {})

export const defaultSystem = createSystem(defaultConfig)

export { defaultSystem as system }