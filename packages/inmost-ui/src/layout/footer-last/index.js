import React from "react";
import styled from "@emotion/styled";

const FooterLast = () => {
  const year = new Date().getFullYear();
  const lastTwoDigitsOfYear = year % 100;

  return (
    <Wrapper>
      <InnerWrapper>
        <Left>{`Y_2k${lastTwoDigitsOfYear}©INMOST`}</Left>
        <Center>TUTTI I DIRITTI RISERVATI</Center>
      </InnerWrapper>
      <Right></Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 4px 0;
  margin: 8px 24px;
  @media ${({ theme }) => theme.device.small} {
    margin: 8px;
  }
`;
const InnerWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  @media ${({ theme }) => theme.device.small} {
    flex-direction: column;
  }
`;

const Left = styled.div`
  font-size: 20px;
  display: flex;
  flex: 1;
  color: ${({ theme }) => theme.colors.primary};
  justify-content: flex-start;
  @media ${({ theme }) => theme.device.small} {
    font-size: 12px;
  }
`;

const Center = styled.div`
  font-size: 20px;
  display: flex;
  flex: 1;
  color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  @media ${({ theme }) => theme.device.small} {
    justify-content: start;
    font-size: 12px;
  }
`;
const Right = styled.div`
  font-size: 20px;
  display: flex;
  flex: 1;
  color: ${({ theme }) => theme.colors.primary};
  justify-content: flex-end;
`;

export default FooterLast;
