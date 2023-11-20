import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import StarNegative from "@svg/star-negative.svg";

const SpacerStc = styled.div`
  display: flex;
  height: ${({ height }) => height * 8}px;
  margin: 0;
  padding: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  align-text: center;
`;

const LineStc = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.primary};
`;

const StarLineStc = styled.div`
  display: flex;
  flex: 1;
  height: 1px;
  background: ${({ theme }) => theme.colors.primary};
`;

const Star = ({ line, color }) => {
  const theme = useTheme();

  return line ? (
    <div style={{ display: "flex", flex: 1, alignItems: " center" }}>
      <StarLineStc />
      <StarNegative
        style={{ height: 36, fill: color || theme.colors.primary }}
      />
      <StarLineStc />
    </div>
  ) : (
    <StarNegative style={{ height: 36, fill: theme.colors.primary }} />
  );
};

const Spacer = ({ space, line, star, color }) => {
  return (
    <SpacerStc height={space}>
      {!star && line && <LineStc />}
      {star && <Star line={line} color={color} />}
    </SpacerStc>
  );
};

export default Spacer;
