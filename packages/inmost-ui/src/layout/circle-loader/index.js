import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import { motion, useAnimation } from "framer-motion";
import { useAppContext } from "@helpers/app-context";

const CircleLoader = ({ r, time, play }) => {
  const theme = useTheme();
  const radius = r || 64;
  const [isPlaying, setIsPlaying] = useState(play);
  const controls = useAnimation();
  // this is a workaround
  const { currentColorTheme } = useAppContext();

  useEffect(() => {
    const initialStrokeDashOffset = ((2 * Math.PI * radius) / 2) * -1;

    const animationConfig = {
      strokeDashoffset: isPlaying ? -1 : initialStrokeDashOffset,
      opacity: isPlaying ? 1 : 0,
      duration: time || 0.3,
      ease: "easeOut",
    };

    controls.start(animationConfig);
  }, [isPlaying, radius, time, controls]);

  useEffect(() => {
    setIsPlaying(play);
  }, [play]);

  return (
    <motion.svg
      height={radius + 3}
      width={radius + 3}
      style={{
        position: "absolute",
        margin: "0 auto",
        background: "transparent",
        borderRadius: "50%",
      }}
    >
      <motion.circle
        stroke={ theme.colors.primary } //cant get theme.colors.primary
        style={{
          fill: "none",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeDasharray: (2 * Math.PI * radius) / 2,
        }}
        animate={controls}
        initial={{
          opacity: 0,
          strokeDashoffset: ((2 * Math.PI * radius) / 2) * -1,
        }}
        r={radius / 2}
        cx={(radius + 3) / 2} // Center the circle horizontally
        cy={(radius + 3) / 2} // Center the circle vertically
      />
    </motion.svg>
  );
};

CircleLoader.propTypes = {
  r: PropTypes.number, // Radius of the loader circle
  time: PropTypes.number, // Animation duration in seconds
  play: PropTypes.bool.isRequired, // Indicates whether the animation should play or stop
};

export default CircleLoader;
