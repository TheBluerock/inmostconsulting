import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useAppContext } from "@helpers/app-context";
import styled from "@emotion/styled";

const UnderWrapper = styled(motion.aside)`
  position: fixed;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 11;
`;

const OverWrapper = styled(motion.aside)`
  position: fixed;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.primary};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 22;
`;

const MenuOverlay = () => {
  const UnderWrapperRef = useRef(null);
  const OverWrapperRef = useRef(null);
  const { isMenuOpen, isDevice } = useAppContext();
  const controls = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    const openClipPath =
      isDevice === "tablet"
        ? "circle(150% at 50% 32px)"
        : "circle(150% at calc(100% - 48px) 30px)";

    const closeClipPath =
      isDevice === "tablet"
        ? "circle(0% at 50% 32px)"
        : "circle(0% at calc(100% - 48px) 30px)";

    if (isMenuOpen) {
      controls2.start({ clipPath: openClipPath, transition: { duration: 0.5, ease: "easeInOut", delay: 0.3 } });
      controls.start({ clipPath: openClipPath, transition: { duration: 0.5, ease: "easeInOut" } });
    } else {
      controls.start({ clipPath: closeClipPath, transition: { duration: 0.5, ease: "easeInOut", delay: 0.3 } });
      controls2.start({ clipPath: closeClipPath, transition: { duration: 0.5, ease: "easeInOut" } });
    }
  }, [isMenuOpen, isDevice, controls, controls2]);

  return (
    <>
      <OverWrapper ref={OverWrapperRef} animate={controls2}></OverWrapper>
      <UnderWrapper ref={UnderWrapperRef} animate={controls}></UnderWrapper>
    </>
  );
};

export default MenuOverlay;
