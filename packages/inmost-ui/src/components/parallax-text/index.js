import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import styled from '@emotion/styled';
import Text from '@commons/text';
import { useTheme } from '@emotion/react';


export const ParallaxTextSerifBig = ({ children, baseVelocity = 100 }) => {
  const theme = useTheme();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 100
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(null);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <ParallaxWrapper>
      <motion.div style={{ x }}>
        <Text
            fontSize={ theme.typography.big }
            fontFamily={ "serif" }
            textTransform={"uppercase"}
            lineHeight={.8}
        >
            <InnerSpan>{children} </InnerSpan>
            <InnerSpan>{children} </InnerSpan>
            <InnerSpan>{children} </InnerSpan>
            <InnerSpan>{children} </InnerSpan>
            <InnerSpan>{children} </InnerSpan>
            <InnerSpan>{children} </InnerSpan>
        </Text>
      </motion.div>
    </ParallaxWrapper>
  );
}

export const ParallaxTextSansBig = ({ children, baseVelocity = 100 }) => {
  const theme = useTheme();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 100
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(null);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */

  return (
    <ParallaxWrapper>
      <motion.div style={{ x }}>
        <Text
            as="h2"
            fontSize={ theme.typography.big }
            fontFamily={ "sans" }
            textTransform={"uppercase"}
            fontWeight={600}
        >
            <span>{children} </span>
            <span>{children} </span>
            <span>{children} </span>
            <span>{children} </span>
        </Text>
      </motion.div>
    </ParallaxWrapper>
  );
}


export const ParallaxTextSansSmall = ({ children, baseVelocity = 100 }) => {
  const theme = useTheme();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 100
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(null);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */

  return (
    <ParallaxWrapper>
      <motion.div style={{ x }}>
        <Text
            as="h3"
            fontSize={ theme.typography.h4 }
            fontFamily={ "sans" }
            textTransform={"uppercase"}
            fontWeight={600}
            lineHeight={1}
        >
            <InnerSpan>{children} </InnerSpan>
            <InnerSpan>{children} </InnerSpan>
            <InnerSpan>{children} </InnerSpan>
            <InnerSpan>{children} </InnerSpan>
            <InnerSpan>{children} </InnerSpan>
            <InnerSpan>{children} </InnerSpan>
            <InnerSpan>{children} </InnerSpan>
            <InnerSpan>{children} </InnerSpan>
        </Text>
      </motion.div>
    </ParallaxWrapper>
  );
}

export default ParallaxTextSansSmall;

const ParallaxWrapper = styled.div`
  overflow: hidden;
  letter-spacing: -0.02em;
  line-height: .8;
  margin: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
`

  const InnerSpan = styled.span`
  margin: 4px .2em;
`