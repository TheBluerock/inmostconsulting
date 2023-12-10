import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styled from "@emotion/styled";

const AnimatedTitle = ({ text }) => {
  const transformString = (inputString) => {
    const string = inputString || "";
    return string.split(" ").map((word) => (word === "" ? "&nbsp;" : word));
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const title = transformString(text);

  return (
    <Text initial="hidden" animate="visible" variants={variants.h1}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants.container}
      >
        {title.map((word, i) => (
          <WordStd key={`${i}`} variants={variants.word}>
            {word.split("").map((char, j) => (
              <>
                <CharStd key={`${j}-${i}`} variants={variants.char}>
                  {char}
                </CharStd>
                {j === word.length - 1 && <CharStd>&nbsp;</CharStd>}
              </>
            ))}
          </WordStd>
        ))}
      </motion.span>
    </Text>
  );
};

export default AnimatedTitle;

const WordStd = styled(motion.span)`
  display: inline-block;
`;

const Text = styled(motion.h1)`
  display: block;
  font-size: ${({ theme }) => theme.typography.big.desktop};
  font-family: ${({ theme }) => theme.fonts.sans};
  line-height: .9;
  text-transform: uppercase;
  @media ${({ theme }) => theme.device.medium}{
    line-height: .9;
    font-size: ${({ theme }) => theme.typography.big.tablet};
  }
  @media ${({ theme }) => theme.device.small}{
    line-height: .9;
    font-size: ${({ theme }) => theme.typography.h3.mobile};
    text-align: right;
  }
`;

const CharStd = styled(motion.span)`
  display: inline-block;
`;

const variants = {
  h1: {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 2,
      },
    },
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  },
  container: {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
    hidden: { opacity: 0 },
  },
  word: {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    hidden: { opacity: 0 },
  },
  char: {
    visible: {
      color: "rgba(197, 8, 8, .9)",
      transition: {
        duration: 2,
      },
    },
    hidden: {
      color: "rgba(0, 244, 255, 0)",
      ease: "easeOut",
    },
  },
};
