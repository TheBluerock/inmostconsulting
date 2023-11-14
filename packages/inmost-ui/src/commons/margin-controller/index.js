import React from "react";
import styled from "@emotion/styled";

const OuterWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 64px;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.device.medium} {
    margin: 0 16px;
  }

  @media ${({ theme }) => theme.device.small} {
    margin: 0 8px;
  }
`;

const MarginController = ({ children }) => {
  return (
    <OuterWrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </OuterWrapper>
  );
};

export default MarginController;
