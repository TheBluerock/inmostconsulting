import React, { memo } from "react";
import { motion } from "framer-motion";
import Text from "@commons/text";
import { useTheme } from "@emotion/react";

const AnimatedParagraph = ({ paragraph, color }) => {
  const theme = useTheme();

  return (
    <Text
      as="h1"
      fontSize={theme.typography.h1}
      color={color}
      fontFamily="serif"
      lineHeight={1.1}
      style={{ textIndent: "3em" }}
    >
      {Array.isArray(paragraph) &&
        paragraph.map((line, i) => (
          <AnimatedLine key={`line-${i}`} i={i}>
            {line}
          </AnimatedLine>
        ))}
    </Text>
  );
};

const AnimatedLine = memo(({ children, i }) => {
  return (
    <motion.span
      initial="hidden"
      whileInView={"visible"}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: "true" }}
      transition={{ duration: 1, delay: 0.045 * i, ease: "easeIn" }}
      variants={{
        visbile: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: "100%" },
      }}
    >
      {children}
    </motion.span>
  );
});

export default AnimatedParagraph;
