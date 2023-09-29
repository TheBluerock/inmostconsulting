import React from "react";
import styled from "@emotion/styled";
import Navigation from "@layout/navigation";
import { useAppContext } from "@helpers/app-context";

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.colors.background || "white"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  z-index: 10;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin: 0 64px;
  min-height: 54px;
  @media ${({ theme }) => theme.device.medium} {
    margin: 0 16px;
  }
  @media ${({ theme }) => theme.device.small} {
    margin: 0 8px;
  }
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <ContentWrapper>
        <Container>
          <Navigation />
        </Container>
      </ContentWrapper>
    </HeaderWrapper>
  );
};

export default Header;
