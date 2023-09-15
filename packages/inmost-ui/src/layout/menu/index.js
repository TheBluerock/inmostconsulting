import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useAppContext } from '@helpers/app-context';
import styled from '@emotion/styled';

const MenuWrapper = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.primary};
  z-index: 20;
  display: ${({ isVisible }) => ( !isVisible ? 'none' : 'block' )};
`;

const SecondWrapper = styled.aside`
  position: fixed;
  background: ${({ theme }) => theme.colors.background};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 21;
`;

const MenuOverlay = () => {
  const WrapperRef = useRef(null);
  const SecondWrapperRef = useRef(null);
  const { isMenuOpen } = useAppContext(); // Replace YourContext with your actual context

  const [isVisible, setIsVisible] = useState(false); // State to control visibility

  useEffect(() => {
    const wrapper = WrapperRef.current;
    const secondWrapper = SecondWrapperRef.current;

    // Define the animation
    const animation = gsap.timeline();
    const secondWrapperAnimation = gsap.timeline();

    if (isMenuOpen) {
      // If isOpen is true (opening), MenuWrapper starts first
      animation.to(wrapper, {
        clipPath: 'circle(150% at calc(50% - 8px) 32px)',
        duration: 0.5, // Adjust the duration as needed
        ease: 'power1.inOut', // Choose an easing function
        onComplete: () => {
          setIsVisible(true); // Set both elements to visible at the end
        },
      });

      // Then SecondWrapper starts with a delay
      secondWrapperAnimation.to(secondWrapper, {
        clipPath: 'circle(150% at calc(50% - 8px) 32px)',
        duration: 0.5, // Adjust the duration as needed
        ease: 'power1.inOut', // Choose an easing function
        delay: 0.3, // Delay SecondWrapper animation
      });
    } else {
      // If isOpen is false (closing), SecondWrapper starts first
      setIsVisible(true); // Set both elements to visible at the start
      secondWrapperAnimation.to(secondWrapper, {
        clipPath: 'circle(0% at calc(50% - 8px) 32px)',
        duration: 0.5, // Adjust the duration as needed
        ease: 'power1.inOut', // Choose an easing function
      });

      // Then MenuWrapper starts with a delay
      animation.to(wrapper, {
        clipPath: 'circle(0% at calc(50% - 8px) 32px)',
        duration: 0.5, // Adjust the duration as needed
        ease: 'power1.inOut', // Choose an easing function
        delay: 0.6, // Delay MenuWrapper animation
        onComplete: () => {
          setIsVisible(false); // Set both elements to hidden at the end
        },
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      <SecondWrapper isVisible={isVisible} ref={SecondWrapperRef}>
        <h1>HOLA HOLA</h1>
      </SecondWrapper>
      {/* <MenuWrapper className="MenuWrapper" ref={WrapperRef} /> */}
    </>
  );
};

export default MenuOverlay;
