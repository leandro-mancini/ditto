export type GenericRef<T> =
  | ((instance: T | null) => void)
  | { current: T | null };

export function assignRef<T = any>(
  ref: GenericRef<T> | null | undefined,
  value: T | null
) {
  if (ref == null) return;

  if (typeof ref === 'function') {
    ref(value);
    return;
  }

  try {
    ref.current = value;
  } catch (error) {
    throw new Error(
      `Não é possível atribuir o valor '${value}' à referência '${ref}'`
    );
  }
}

export function mergeRefs<T>(...refs: (GenericRef<T> | null | undefined)[]) {
  return (node: T | null) => {
    refs.forEach((ref) => {
      assignRef(ref, node);
    });
  };
}
