import React from "react";
import styled from "@emotion/styled";

// OuterWrapper styles
const OuterWrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: ${({ width }) => (width ? width : "100%")};
  margin: 0 auto;

  @media ${({ theme }) => theme.device.large} {
    max-width: calc(100% - 48px);
  }
  @media ${({ theme }) => theme.device.small} {
    max-width: calc(100% - 16px);
  }
`;

// InnerWrapper styles
const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  justify-content: ${({ align }) => align || "flex-start"};
`;

// Container component
const Container = ({ children, reverse, column, width, align }) => {
  return (
    <OuterWrapper width={width}>
      <InnerWrapper reverse={reverse} column={column} align={align}>
        {children}
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default Container;
