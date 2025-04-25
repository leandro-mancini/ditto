import { SystemContext } from '@ditto/styled-system';

export interface ReadResult {
  mod: SystemContext;
  dependencies: string[];
}

export interface CodegenFlags {
  strict?: boolean;
  format?: boolean;
  watch?: string;
  clean?: boolean;
}
