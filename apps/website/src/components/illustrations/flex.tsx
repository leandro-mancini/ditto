import React from 'react';
import { createComponent } from './create-component';

export const FlexAnatomy = createComponent((props) => {
  const { palette, ...rest } = props;
  return (
    <svg
      width={400}
      height={300}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect
        opacity={0.34}
        x={70}
        y={125}
        width={261}
        height={90}
        fill={palette[3]}
      />
      <rect x={70} y={125} width={81} height={90} fill={palette[2]} />
      <rect x={160} y={125} width={81} height={90} fill={palette[2]} />
      <rect x={250} y={125} width={81} height={90} fill={palette[2]} />
      <rect x={169.5} y={76} width={60} height={32} rx={10} fill={palette[3]} />
      <path
        d="M189.066 88.4727V90.1176H183.117V88.4727H189.066ZM184.748 99V87.2528C184.748 86.5948 184.892 86.0488 185.18 85.6147C185.468 85.1761 185.849 84.8494 186.325 84.6347C186.8 84.4153 187.316 84.3057 187.874 84.3057C188.285 84.3057 188.637 84.34 188.929 84.4085C189.221 84.4725 189.438 84.5319 189.58 84.5867L189.1 86.2453C189.004 86.2179 188.881 86.1859 188.73 86.1493C188.579 86.1082 188.397 86.0876 188.182 86.0876C187.684 86.0876 187.328 86.211 187.113 86.4577C186.903 86.7045 186.798 87.0609 186.798 87.5269V99H184.748ZM193.23 84.9636V99H191.18V84.9636H193.23ZM200.524 99.2125C199.487 99.2125 198.593 98.9909 197.844 98.5477C197.099 98.0999 196.523 97.4716 196.117 96.6629C195.715 95.8496 195.514 94.8969 195.514 93.8049C195.514 92.7266 195.715 91.7762 196.117 90.9538C196.523 90.1313 197.09 89.4894 197.817 89.0279C198.548 88.5664 199.402 88.3357 200.38 88.3357C200.974 88.3357 201.55 88.4339 202.107 88.6304C202.664 88.8268 203.165 89.1353 203.608 89.5556C204.051 89.976 204.401 90.522 204.657 91.1936C204.912 91.8607 205.04 92.6718 205.04 93.6267V94.3532H196.672V92.818H203.032C203.032 92.2788 202.923 91.8013 202.703 91.3855C202.484 90.9652 202.176 90.6339 201.778 90.3918C201.385 90.1496 200.924 90.0285 200.394 90.0285C199.818 90.0285 199.315 90.1702 198.886 90.4534C198.461 90.7322 198.132 91.0977 197.899 91.55C197.67 91.9978 197.556 92.4844 197.556 93.0099V94.2093C197.556 94.9129 197.679 95.5115 197.926 96.0049C198.178 96.4984 198.527 96.8754 198.975 97.1358C199.423 97.3917 199.946 97.5196 200.544 97.5196C200.933 97.5196 201.287 97.4648 201.607 97.3551C201.926 97.2409 202.203 97.0718 202.436 96.8479C202.669 96.6241 202.847 96.3476 202.971 96.0186L204.91 96.3682C204.755 96.9393 204.476 97.4396 204.074 97.8691C203.676 98.2941 203.176 98.6253 202.573 98.8629C201.974 99.096 201.291 99.2125 200.524 99.2125ZM208.687 88.4727L211.01 92.5712L213.354 88.4727H215.595L212.312 93.7364L215.622 99H213.381L211.01 95.066L208.645 99H206.397L209.673 93.7364L206.439 88.4727H208.687Z"
        fill={palette[15]}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M151 126L159 133L159.659 132.248L151.659 125.248L151 126ZM151 135L159 142L159.659 141.248L151.659 134.248L151 135ZM159 151L151 144L151.659 143.248L159.659 150.248L159 151ZM151 153L159 160L159.659 159.248L151.659 152.248L151 153ZM159 169L151 162L151.659 161.248L159.659 168.248L159 169ZM151 171L159 178L159.659 177.248L151.659 170.248L151 171ZM159 187L151 180L151.659 179.248L159.659 186.248L159 187ZM151 189L159 196L159.659 195.248L151.659 188.248L151 189ZM159 205L151 198L151.659 197.248L159.659 204.248L159 205ZM151 207L159 214L159.659 213.248L151.659 206.248L151 207ZM249 133L241 126L241.659 125.248L249.659 132.248L249 133ZM241 135L249 142L249.659 141.248L241.659 134.248L241 135ZM249 151L241 144L241.659 143.248L249.659 150.248L249 151ZM241 153L249 160L249.659 159.248L241.659 152.248L241 153ZM249 169L241 162L241.659 161.248L249.659 168.248L249 169ZM241 171L249 178L249.659 177.248L241.659 170.248L241 171ZM249 187L241 180L241.659 179.248L249.659 186.248L249 187ZM241 189L249 196L249.659 195.248L241.659 188.248L241 189ZM249 205L241 198L241.659 197.248L249.659 204.248L249 205ZM241 207L249 214L249.659 213.248L241.659 206.248L241 207Z"
        fill={palette[3]}
      />
    </svg>
  );
});
