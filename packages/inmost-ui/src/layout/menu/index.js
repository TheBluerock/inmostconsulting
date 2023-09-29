import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useAppContext } from "@helpers/app-context";
import styled from "@emotion/styled";

const MenuWrapper = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.primary};
  z-index: 20;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  display: ${({ isVisible }) => (isVisible ? "none" : "block")};
`;

const SecondWrapper = styled.aside`
  position: fixed;
  background: ${({ theme }) => theme.colors.background};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 22;
`;

const MenuOverlay = () => {
  const WrapperRef = useRef(null);
  const SecondWrapperRef = useRef(null);
  const { isMenuOpen, isDevice } = useAppContext(); // Replace YourContext with your actual context

  const [isVisible, setIsVisible] = useState(false); // State to control visibility

  useEffect(() => {
    const wrapper = WrapperRef.current;
    const secondWrapper = SecondWrapperRef.current;

    // Define the animation
    const animation = gsap.timeline();
    const secondWrapperAnimation = gsap.timeline();

    const clipPath =
      isDevice === "tablet"
        ? "circle(150% at 50% 32px)"
        : "circle(150% at calc(100% - 24px) 32px)";

    if (isMenuOpen) {
      setIsVisible(true); // Set both elements to visible at the start

      // Then SecondWrapper starts with a delay
      secondWrapperAnimation.to(secondWrapper, {
        clipPath: "circle(150% at 50% 32px)",
        duration: 0.6, // Adjust the duration as needed
        ease: "power2.inOut", // Choose an easing function
        delay: 0.3, // Delay SecondWrapper animation
      });
    } else {
      // If isOpen is false (closing), SecondWrapper starts first
      secondWrapperAnimation.to(secondWrapper, {
        clipPath: "circle(0% at 50% 32px)",
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
