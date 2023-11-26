import React, { useState } from "react";
import styled from "@emotion/styled";
import CircleLoader from "@layout/circle-loader";
import { useAppContext } from "@helpers/app-context";
import { ThemeProvider } from "@emotion/react";
import theme from "@theme";

const BurgerButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ isOpen }) => (isOpen ? "3px" : "25%")};
  position: relative;
  transition: height 0.3s ease-in-out;
  width: 100%;
  z-index: 2;
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:before,
  &:after {
    content: "";
    width: ${({ isOpen }) => (isOpen ? "3px" : "calc(100% - 4px)")};
    border-radius: ${({ isOpen }) => (isOpen ? "3px" : "0")};
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary || "transparent"};
    position: absolute;
    transition:
      width 0.3s ease-in-out,
      border-radius 0.3s ease-in-out,
      background-color 0.3 easeInOut;
  }

  &:before {
    top: 0;
  }

  &:after {
    bottom: 0;
  }
`;

const MenuButton = ({ hovered }) => {
  const { isMenuOpen, toggleMenu, currentColorTheme } = useAppContext();
  const [isClicked, setIsClicked] = useState(false);

  const menuTheme = {
    ...theme,
    colors: currentColorTheme,
  };

  const handleClick = () => {
    toggleMenu();
    setIsClicked(!isClicked);
  };

  return (
    <ThemeProvider theme={menuTheme}>
      <BurgerButtonWrapper
        onClick={handleClick}
        isOpen={isMenuOpen}
        isHovered={hovered}
        clicked={isClicked}
        aria-label="Toggle Menu"
      >
        <Line isOpen={isMenuOpen} />
      </BurgerButtonWrapper>
      <CircleLoader play={isMenuOpen} r={48} />
    </ThemeProvider>
  );
};

export default MenuButton;
