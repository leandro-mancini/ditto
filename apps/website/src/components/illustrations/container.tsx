import React from 'react';
import { createComponent } from './create-component';

export const ContainerAnatomy = createComponent((props) => {
  const { palette, ...rest } = props;
  return (
    <svg
      width="200"
      height="100"
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect width="200" height="100" fill={palette[3]} />
      <rect
        x="30"
        y="10"
        width="140"
        height="80"
        fill={palette[5]}
        stroke={palette[15]}
        stroke-width="2"
        stroke-dasharray="4"
        rx="8"
        ry="8"
      />
    </svg>
  );
});
