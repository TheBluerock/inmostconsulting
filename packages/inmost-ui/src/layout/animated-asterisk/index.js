import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "@emotion/react";

const Asterisk = ({ size, number }) => {
  const asteriskRef = useRef(null);
  const asteriskSize = size || 64;
  const radius = asteriskSize / 2;
  const stemCount = number || 16;
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        duration: 12,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    });
  }, [controls]);

  const stems = Array.from({ length: stemCount }).map((_, i) => (
    <Line key={i} id={`stem-${i}`} i={i} radius={radius} />
  ));

  return (
    <motion.svg
      ref={asteriskRef}
      viewBox={`0 0 ${asteriskSize} ${asteriskSize}`}
      height={asteriskSize}
      width={asteriskSize}
      animate={controls}
    >
      {stems}
    </motion.svg>
  );
};

const Line = ({ i, radius, id }) => {
  const theme = useTheme();
  const stemVariants = {
    initial: { x2: radius, y2: radius },
    animate: {
      x2: radius * Math.cos((((i * 360) / 16) * Math.PI) / 180) + radius,
      y2: radius * Math.sin((((i * 360) / 16) * Math.PI) / 180) + radius,
      transition: { delay: i * 0.035 },
    },
    exit: { x2: radius, y2: radius },
  };

  return (
    <motion.line
      custom={i}
      x1={radius}
      y1={radius}
      stroke={theme.colors.primary}
      strokeWidth={1.1}
      id={id}
      variants={stemVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    />
  );
};

export default Asterisk;
