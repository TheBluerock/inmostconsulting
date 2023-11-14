import React from "react";
import AsteriskSvg from "@svg/asterisk.svg";
import styled from "@emotion/styled";

const OuterWrapper = styled.span`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
`;

const AsteriskStd = styled(AsteriskSvg)`
  stroke: ${({ stroke, theme }) => (stroke ? stroke : theme.colors.primary)};
`;

const Asterisk = ({ size, stroke }) => {
  return (
    <OuterWrapper size={size}>
      <AsteriskStd stroke={stroke} />
    </OuterWrapper>
  );
};

export default Asterisk;
