import { forwardRef } from 'react';
import { Button, ButtonProps } from './button';
import React from 'react';

export interface IconButtonProps extends ButtonProps {}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(props, ref) {
    return (
      <Button
        px="0"
        py="0"
        _icon={{ fontSize: '1.2em' }}
        ref={ref}
        {...props}
      />
    );
  }
);