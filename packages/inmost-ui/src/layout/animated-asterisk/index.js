import React, { useEffect, useRef } from "react";
import { useTheme } from "@emotion/react";
import gsap from "gsap";

const Asterisk = ({ size, number }) => {
  const asteriskRef = useRef(null);
  const asteriskSize = size ? size : 64;
  const radius = asteriskSize / 2;
  const stemCount = number || 16; // Default to 6 stems if number prop is not provided

  useEffect(() => {
    const tl = gsap.timeline();

    // Create a staggered animation for each stem
    for (let i = 0; i < stemCount; i++) {
      const stem = asteriskRef.current.querySelector(`#stem-${i}`);
      const angle = (i * 360) / stemCount;
      const x2 = radius * Math.cos((angle * Math.PI) / 180) + radius;
      const y2 = radius * Math.sin((angle * Math.PI) / 180) + radius;

      tl.fromTo(
        stem,
        { attr: { x2: radius, y2: radius } }, // From the center of the circle
        {
          duration: 0.5,
          attr: { x2, y2 }, // To the calculated position
          ease: "power2.out",
        },
        i * 0.037, // Stagger the animations
      );
    }

    // Rotate the entire Asterisk component
    gsap.to(asteriskRef.current, {
      duration: 16, // 8 seconds for one full rotation
      rotation: 360, // 360 degrees for one full rotation
      repeat: -1, // Repeat indefinitely
      ease: "linear",
    });
  }, [stemCount, radius]);

  const stems = [];

  for (let i = 0; i < stemCount; i++) {
    const angle = (i * 360) / stemCount;
    const x2 = radius * Math.cos((angle * Math.PI) / 180) + radius;
    const y2 = radius * Math.sin((angle * Math.PI) / 180) + radius;

    stems.push(
      <Line key={i} id={`stem-${i}`} x1={radius} y1={radius} x2={x2} y2={y2} />,
    );
  }

  return (
    <svg
      ref={asteriskRef}
      viewBox={`0 0 ${asteriskSize} ${asteriskSize}`}
      height={asteriskSize}
      width={asteriskSize}
    >
      {stems}
    </svg>
  );
};

export default Asterisk;

export const Line = ({ x1, y1, x2, y2, id }) => {
  const theme = useTheme();
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={theme.colors.primary}
      strokeWidth={1.1}
      id={id}
    />
  );
};
