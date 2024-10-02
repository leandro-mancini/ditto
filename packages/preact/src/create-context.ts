'use client';

import { h, createContext as createPreactContext, Context } from 'preact';
import { useContext as usePreactContext } from 'preact/hooks';

export interface CreateContextOptions<T> {
  strict?: boolean;
  hookName?: string;
  providerName?: string;
  errorMessage?: string;
  name?: string;
  defaultValue?: T;
}

export type CreateContextReturn<T> = [
  Context<T>['Provider'],
  () => T,
  Context<T>
];

function getErrorMessage(hook: string, provider: string) {
  return `${hook} retornou \`undefined\`. Parece que você esqueceu de encapsular o componente dentro de ${provider}`;
}

export function createContext<T>(options: CreateContextOptions<T> = {}) {
  const {
    name,
    strict = true,
    hookName = 'useContext',
    providerName = 'Provider',
    errorMessage,
    defaultValue,
  } = options;

  // Cria o contexto usando Preact
  const Context = createPreactContext<T | undefined>(defaultValue);

  Context.displayName = name;

  function useContext() {
    const context = usePreactContext(Context);

    if (context === undefined && strict) {
      const error = new Error(
        errorMessage ?? getErrorMessage(hookName, providerName)
      );
      error.name = 'ContextError';
      Error.captureStackTrace?.(error, useContext);
      throw error;
    }

    return context;
  }

  return [Context.Provider, useContext, Context] as CreateContextReturn<T>;
}
