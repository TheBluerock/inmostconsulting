import React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const StarPositive = () => {
  const theme = useTheme();
  return (
    <OuterWrapper viewBox="0 0 64 64">
      <path
        fill={theme.colors.primary}
        d="M64,32C46.3,32,32,17.7,32,0c0,17.7-14.3,32-32,32c17.7,0,32,14.3,32,32C32,46.3,46.3,32,64,32z"
      />
    </OuterWrapper>
  );
};

export default StarPositive;

const OuterWrapper = styled.svg`
  width: 36px;
  height: 36px;
`;
