import React from "react";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  hidden: { opacity: 0, y: "100%", filter: "blur(5px)" },
};

const TalksTitle = ({ theme }) => {
  return (
    <svg x="0px" y="0px" viewBox="0 0 763.9 201.8">
      <g style={{ fill: theme.colors.primary, overflow: "hidden" }}>
        <motion.path
          id={"T"}
          d="M0,3.8h155.7v33H97.5v160.6H58.2V36.8H0V3.8z"
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 1 }}
          variants={variants}
        />
        <motion.path
          d="M188,3.8h40.6l68.2,193.6h-40.9l-13-41.2h-69.9l-12.7,41.2h-39.8L188,3.8z M182.3,126.2h51.2l-17.3-55.8
                c-3.2-10.3-7.9-29.8-7.9-29.8h-0.5c0,0-4.9,19.5-8.1,29.8L182.3,126.2z"
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 1, delay: 0.2 }}
          variants={variants}
        />
        <motion.path
          d="M307.3,3.8h39.3v160.9h91v32.8H307.3V3.8z"
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 1, delay: 0.4 }}
          variants={variants}
        />
        <motion.path
          d="M450,3.8h39.3V81l74.5-77.2h48.7l-75.8,77.5l80.7,116.2h-46L509.1,107l-19.8,20v70.4H450V3.8z"
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 1, delay: 0.6 }}
          variants={variants}
        />
        <motion.path
          d="M604.9,137.6h38.5c2.7,23.3,16,32.5,43.6,32.5c20,0,37.6-7,37.6-24.9c0-19-18.4-22.8-47.9-29.5
                c-34.7-7.9-66.4-17.1-66.4-57.4c0-38.2,31.1-58,74.2-58c43.6,0,71.8,21.4,74.7,60.4h-37.6c-2.2-19.5-17.3-29.2-37.4-29.2
                c-21.1,0-34.9,8.9-34.9,22.7c0,15.7,13.5,20.3,42.2,26.5c39.8,8.7,72.3,18.1,72.3,59.9c0,39.3-31.7,61.2-75.3,61.2
                C636.1,201.8,606.3,178.5,604.9,137.6z"
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 1, delay: 0.8 }}
          variants={variants}
        />
      </g>
    </svg>
  );
};

export default TalksTitle;
