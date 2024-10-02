import {
  ConditionalValue,
  mapObject,
  SystemStyleObject,
} from '@dittox/styled-system';

export type StackDirection = ConditionalValue<
  'row' | 'column' | 'row-reverse' | 'column-reverse'
>;

interface Options {
  gap: SystemStyleObject['gap'];
  direction: StackDirection;
}

export function getSeparatorStyles(options: Options) {
  const { gap, direction } = options;

  const styles: Record<string, any> = {
    column: {
      marginY: gap,
      marginX: 0,
      borderInlineStartWidth: 0,
      borderTopWidth: 1,
    },
    'column-reverse': {
      marginY: gap,
      marginX: 0,
      borderInlineStartWidth: 0,
      borderTopWidth: 1,
    },
    row: {
      marginX: gap,
      marginY: 0,
      borderInlineStartWidth: 1,
      borderTopWidth: 0,
    },
    'row-reverse': {
      marginX: gap,
      marginY: 0,
      borderInlineStartWidth: 1,
      borderTopWidth: 0,
    },
  };

  return {
    '&': mapObject(direction, (value) => styles[value]),
  };
}