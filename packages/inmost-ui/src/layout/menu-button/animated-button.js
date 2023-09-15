import React from 'react';
import styled from '@emotion/styled';
import CircleLoader from '@layout/circle-loader';
import { useAppContext } from '@helpers/app-context'; // Import the context

const BurgerButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: ${({ isOpen, isHovered }) => isOpen || isHovered ? '3px' : '25%' };
  position: relative;
  transition: height .3s ease-in-out;
  width: 100%; /* Adjust the width as needed */
  z-index: 2;
`;

const Line = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:before {
    content: "";
    width: ${({ isOpen }) => isOpen ? '3px' : 'calc(100% - 4px)' };
    border-radius: ${({ isOpen }) => isOpen ? '3px' : '0' };
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    top: 0;
    position: absolute;
    transition: width .3s ease-in-out, border-radius .3s ease-in-out;
  }

  &:after {
    content: "";
    width: ${({ isOpen }) => isOpen ? '3px' : 'calc(100% - 4px)' };
    border-radius: ${({ isOpen }) => isOpen ? '3px' : '0' };
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    bottom: 0;
    position: absolute;
    transition: width .3s ease-in-out, border-radius .3s ease-in-out;
  }
}`;

const MenuButton = ({ hovered }) => {
  const { isMenuOpen } = useAppContext(); // Use the context

  return (
    <>
      <BurgerButtonWrapper isOpen={isMenuOpen} isHovered={ hovered }>
        <Line isOpen={isMenuOpen} />
      </BurgerButtonWrapper>
      <CircleLoader play={isMenuOpen} r={ 48 } />
    </>
  );
};

export default MenuButton;
