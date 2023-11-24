import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import InnerButton from "./animated-button";
import { useAppContext } from "@helpers/app-context";

const MenuButtonStc = styled.div`
  cursor: pointer;
  position: fixed;
  display: ${({ device }) => (device === "desktop" ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 64px;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;
  border-radius: 50%;
  @media ${({ theme }) => theme.device.small} {
    top: 4px;
    left: calc(100% - 16px);
    transform: translateX(-100%);
  }
`;

const MenuButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleMenu, isDevice, isMenuOpen } = useAppContext(); // Use the context

  useEffect(() => {
    const body = document.body;

    if (isMenuOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }

    // Cleanup function
    return () => {
      body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <MenuButtonStc
      onClick={toggleMenu}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      hovered={isHovered}
      device={isDevice}
    >
      <InnerButton hovered={isHovered} />
    </MenuButtonStc>
  );
};

export default MenuButton;
