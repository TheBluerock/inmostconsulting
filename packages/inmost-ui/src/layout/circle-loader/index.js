import React, { useRef, useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import { gsap } from "gsap";

const CircleLoader = ({ r, time, play }) => {
  const theme = useTheme();
  const radius = r || 64;
  const circleRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(play);

  useLayoutEffect(() => {
    const initialStrokeDashOffset = ((2 * Math.PI * radius) / 2) * -1;

    const animationConfig = {
      strokeDashoffset: isPlaying ? -1 : initialStrokeDashOffset,
      opacity: isPlaying ? 1 : 0,
      duration: time || 0.3,
      ease: "power1.out",
    };

    gsap.to(circleRef.current, animationConfig);
  }, [isPlaying, radius, time]);

  useLayoutEffect(() => {
    setIsPlaying(play);
  }, [play]);

  return (
    <svg
      height={radius + 3}
      width={radius + 3}
      style={{
        position: "absolute",
        margin: "0 auto",
        background: "transparent",
        borderRadius: "50%",
      }}
    >
      <circle
        ref={circleRef}
        style={{
          fill: "none",
          stroke: theme.colors.primary, // You can replace with your desired color
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeDasharray: (2 * Math.PI * radius) / 2,
        }}
        r={radius / 2}
        cx={(radius + 3) / 2} // Center the circle horizontally
        cy={(radius + 3) / 2} // Center the circle vertically
      />
    </svg>
  );
};

CircleLoader.propTypes = {
  r: PropTypes.number, // Radius of the loader circle
  time: PropTypes.number, // Animation duration in seconds
  play: PropTypes.bool.isRequired, // Indicates whether the animation should play or stop
};

export default CircleLoader;
