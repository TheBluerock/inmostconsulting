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


const MenuBody = () => {
  return (
    <>
    <Spacer space={8} />
      <Wrapper>
        <MenuBoxWrapper />
      </Wrapper>
    </>
  );
};

export default MenuBody;
