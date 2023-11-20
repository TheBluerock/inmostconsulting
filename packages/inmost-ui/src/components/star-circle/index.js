import React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const StarCircle = () => {
  const theme = useTheme();

  return (
    <OuterWrapper>
      <svg x={0} y={0} viewBox="0 0 256 256">
        <g style={{ fill: theme.colors.secondary }}>
          <path
            d="M238.55,128C177.49,128,128,78.51,128,17.45C128,78.51,78.51,128,17.45,128C78.51,128,128,177.49,128,238.55
                    C128,177.49,177.49,128,238.55,128z"
          />
        </g>

        <g style={{ fill: theme.colors.primary }}>
          <path
            d="M128,2c33.66,0,65.3,13.11,89.1,36.9C240.89,62.7,254,94.34,254,128s-13.11,65.3-36.9,89.1
                    c-23.8,23.8-55.44,36.9-89.1,36.9s-65.3-13.11-89.1-36.9C15.11,193.3,2,161.66,2,128s13.11-65.3,36.9-89.1S94.34,2,128,2 M128,0
                    C57.31,0,0,57.31,0,128s57.31,128,128,128s128-57.31,128-128S198.69,0,128,0L128,0z"
          />
        </g>
      </svg>
    </OuterWrapper>
  );
};

export default StarCircle;

const OuterWrapper = styled.svg`
  width: 36px;
  height: 36px;
`;
