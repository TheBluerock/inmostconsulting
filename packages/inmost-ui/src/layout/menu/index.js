import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useAppContext } from "@helpers/app-context";
import styled from "@emotion/styled";

const SecondWrapper = styled.aside`
  position: fixed;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 22;
`;

const MenuOverlay = () => {
  const SecondWrapperRef = useRef(null);
  const { isMenuOpen, isDevice } = useAppContext(); // Replace YourContext with your actual context

  useEffect(() => {
    const secondWrapper = SecondWrapperRef.current;

    // Define the animation

    const secondWrapperAnimation = gsap.timeline();

    const openClipPath =
      isDevice === "tablet"
        ? "circle(150% at 50% 32px)"
        : "circle(150% at calc(100% - 64px) 32px)";

    const closeClipPath =
      isDevice === "tablet"
        ? "circle(0% at 50% 32px)"
        : "circle(0% at calc(100% - 64px) 32px)";

    if (isMenuOpen) {
      // Then SecondWrapper starts with a delay
      secondWrapperAnimation.to(secondWrapper, {
        clipPath: openClipPath,
        duration: 0.6, // Adjust the duration as needed
        ease: "power2.inOut", // Choose an easing function
        delay: 0.3, // Delay SecondWrapper animation
      });
    } else {
      // If isOpen is false (closing), SecondWrapper starts first
      secondWrapperAnimation.to(secondWrapper, {
        clipPath: closeClipPath,
        duration: 0.6, // Adjust the duration as needed
        ease: "power1.inOut", // Choose an easing function
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      <SecondWrapper ref={SecondWrapperRef}></SecondWrapper>
    </>
  );
};

export default MenuOverlay;
