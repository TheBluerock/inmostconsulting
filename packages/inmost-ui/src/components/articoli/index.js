import React from "react";
import { motion } from "framer-motion";

const ArticlesTitle = ({ theme }) => {
  return (
    <svg x={0} y={0} viewBox="0 0 1112.2 201.8">
      <g style={{ fill: theme.colors.primary, overflow: "hidden" }}>
        <motion.path
          d="M67.4,3.8h40.6l68.2,193.6h-40.9l-13-41.2H52.5l-12.7,41.2H0L67.4,3.8z M61.8,126.2h51.2L95.6,70.4
                c-3.2-10.3-7.9-29.8-7.9-29.8h-0.5c0,0-4.9,19.5-8.1,29.8L61.8,126.2z"
          initial={"hidden"}
          animate={"visible"}
          whileInView={"visible"}
          exit={"hidden"}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            hidden: { opacity: 0, y: "100%", filter: "blur(5px)" },
          }}
        />
        <motion.path
          d="M186.8,3.8h88.8c37.4,0,62.3,21.7,62.3,53.9c0,22.7-10.6,40.1-35.5,46.9v0.8c17.9,5.1,27.1,15.4,29.5,39
                c2.7,27.4,1.6,48.2,8.4,51.2v1.9h-37.6c-4.9-2.2-5.4-23.8-7-44.7c-1.6-21.1-13.5-33-37.9-33H226v77.7h-39.3V3.8z M226,89.4h41.7
                c21.4,0,32-11.1,32-26.5c0-15.7-10-27.4-30.9-27.4H226V89.4z"
          initial={"hidden"}
          animate={"visible"}
          whileInView={"visible"}
          exit={"hidden"}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            hidden: { opacity: 0, y: "100%", filter: "blur(5px)" },
          }}
        />
        <motion.path
          d="M345.6,3.8h155.7v33h-58.2v160.6h-39.3V36.8h-58.2V3.8z"
          initial={"hidden"}
          animate={"visible"}
          whileInView={"visible"}
          exit={"hidden"}
          transition={{ duration: 1.5, delay: 0.4 }}
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            hidden: { opacity: 0, y: "100%", filter: "blur(5px)" },
          }}
        />
        <motion.path
          d="M514.5,3.8h39.3v193.6h-39.3V3.8z"
          initial={"hidden"}
          animate={"visible"}
          whileInView={"visible"}
          exit={"hidden"}
          transition={{ duration: 1.5, delay: 0.6 }}
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            hidden: { opacity: 0, y: "100%", filter: "blur(5px)" },
          }}
        />
        <motion.path
          d="M566.7,101.3C566.7,43.9,602.5,0,659.6,0c47.7,0,75.8,28.4,79.9,65.3h-39C697,45.8,682.4,33,659.6,33
                c-35.8,0-52.8,29.8-52.8,68.2c0,39.5,20.6,68,53.1,68c23,0,39.3-13.8,41.7-34.1h38.5c-1.1,17.1-8.4,33.6-21.4,45.8
                c-13.3,12.5-32,20.6-58.8,20.6C605.5,201.5,566.7,159.5,566.7,101.3z"
          initial={"hidden"}
          animate={"visible"}
          whileInView={"visible"}
          exit={"hidden"}
          transition={{ duration: 1.5, delay: 0.8 }}
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            hidden: { opacity: 0, y: "100%", filter: "blur(5px)" },
          }}
        />
        <motion.path
          d="M741.4,101c0-58,36.3-101,93.4-101S928,43.1,928,101s-36,100.7-93.2,100.7S741.4,159,741.4,101z M887.9,101
                c0-38.7-17.3-68.8-52.8-68.8s-53.6,30.1-53.6,68.8c0,38.5,18.1,68.5,53.6,68.5S887.9,139.5,887.9,101z"
          initial={"hidden"}
          animate={"visible"}
          whileInView={"visible"}
          exit={"hidden"}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            hidden: { opacity: 0, y: "100%", filter: "blur(5px)" },
          }}
        />
        <motion.path
          d="M935.6,3.8h39.3v160.9h91v32.8H935.6V3.8z"
          initial={"hidden"}
          animate={"visible"}
          whileInView={"visible"}
          exit={"hidden"}
          transition={{ duration: 1.5, delay: 1.2 }}
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            hidden: { opacity: 0, y: "100%", filter: "blur(5px)" },
          }}
        />
        <motion.path
          d="M1072.9,3.8h39.3v193.6h-39.3V3.8z"
          initial={"hidden"}
          animate={"visible"}
          whileInView={"visible"}
          exit={"hidden"}
          transition={{ duration: 1.5, delay: 1.4 }}
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            hidden: { opacity: 0, y: "100%", filter: "blur(5px)" },
          }}
        />
      </g>
    </svg>
  );
};

export default ArticlesTitle;
