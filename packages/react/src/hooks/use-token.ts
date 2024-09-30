'use client';

import { useMemo } from 'react';
import { useDittoContext } from '../core';

export function useToken(category: string, token: string | string[]): string[] {
  const sys = useDittoContext();
  return useMemo(() => {
    const arr = Array.isArray(token) ? token : [token];
    return arr.map((t) => sys.token(`${category}.${t}`, t));
  }, [sys, category, token]);
}
