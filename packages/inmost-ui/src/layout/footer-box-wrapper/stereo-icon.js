import React from "react";
import { useTheme } from "@emotion/react";

const StereoIcon = () => {
  const theme = useTheme();

  return (
    <svg x="0px" y="0px" viewBox="0 0 300 300">
      <defs>
        <style type="text/css">
          {`
            .st0 {
              clip-path: url(#clipPath);
            }
          `}
        </style>
        <rect id="SVGID_1_" x="0" width="300" height="302.9" />
        <clipPath id="clipPath">
          <use href="#SVGID_1_" style={{ overflow: "visible" }} />
        </clipPath>
      </defs>
      <g style={{ fill: theme.colors.primary }}>
        <ellipse cx="150.8" cy="148.2" rx="73.4" ry="74.1" className="st0" />
        <ellipse cx="405.5" cy="150" rx="181.4" ry="183.1" className="st0" />
        <ellipse cx="-104" cy="150" rx="181.4" ry="183.1" className="st0" />
      </g>
    </svg>
  );
};

export default StereoIcon;
