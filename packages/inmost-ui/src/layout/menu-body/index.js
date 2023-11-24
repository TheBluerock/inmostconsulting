import React from 'react';
import styled from '@emotion/styled';
import MenuBoxWrapper from '@layout/menu-box-wrapper';
import Spacer from "@components/spacer";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: row;
`;

const OuterWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-end;
`;

const StyledMenuBoxWrapper = styled(MenuBoxWrapper)`
    align-self: flex-end;
`

const MenuBody = () => {
  return (
    <OuterWrapper>
      <Wrapper>
        <StyledMenuBoxWrapper />
      </Wrapper>
    </OuterWrapper>
  );
};

export default MenuBody;
