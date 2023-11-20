import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "@emotion/react";

const Asterisk = ({ size, number }) => {
  const asteriskRef = useRef(null);
  const asteriskSize = size || 64;
  const radius = asteriskSize / 2;
  const stemCount = number || 16; // Default to 16 stems if number prop is not provided
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      x2: radius * Math.cos((((i * 360) / stemCount) * Math.PI) / 180) + radius,
      y2: radius * Math.sin((((i * 360) / stemCount) * Math.PI) / 180) + radius,
    }));

    controls.start({
      rotate: 360,
      transition: {
        duration: 12,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    });
  });

  const stems = Array.from({ length: stemCount }).map((_, i) => (
    <Line key={i} id={`stem-${i}`} controls={controls} i={i} radius={radius} />
  ));

  return (
    <motion.svg
      ref={asteriskRef}
      viewBox={`0 0 ${asteriskSize} ${asteriskSize}`}
      height={asteriskSize}
      width={asteriskSize}
    >
      {stems}
    </motion.svg>
  );
};

const Line = ({ controls, i, radius, id }) => {
  const theme = useTheme();
  return (
    <motion.line
      custom={i}
      x1={radius}
      y1={radius}
      stroke={theme.colors.primary}
      strokeWidth={1.1}
      id={id}
      initial={{ x2: radius, y2: radius }}
      animate={controls}
      exit={{ x2: radius, y2: radius }}
      transition={{ delay: i * 0.035 }}
    />
  );
};

export default Asterisk;
