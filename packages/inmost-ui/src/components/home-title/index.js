import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@emotion/react'

const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: "100%" },
};


const InmostTitle = () => {

    const theme = useTheme();

    return(
            <svg x="0px" y="0px" viewBox="0 0 962.8 193" fill={ theme.colors.primary}>
            <motion.path d="M0,3.4h37.6v185.5H0V3.4z"
                initial={"hidden"}
                animate={"visible"}
                transition={{ duration: 1 }}
                variants={variants}
            />
            <motion.path d="M66.4,3.4h38.1l61.8,103.5c6,10.1,13,25.9,13,25.9h0.5c0,0-1-19.2-1-32.2V3.4h37.1v185.5h-36.3L116.3,86.4
                c-6-9.9-13.2-25.7-13.2-25.7h-0.5c0,0,1,19.5,1,32.4v95.8H66.4V3.4z"
                initial={"hidden"}
                animate={"visible"}
                transition={{ duration: 1, delay: 0.2 }}
                variants={variants}
            />
            <motion.path d="M244.4,3.4h52.9l26.2,93.2c6.5,23.4,11.7,50.1,11.7,50.1h0.5c0,0,4.9-26.7,11.4-50.1l26.2-93.2H427v185.5h-35
                V82.5c0-15.1,1.6-38.4,1.6-38.4h-0.5c0,0-4.2,21.8-8,35.3l-31.9,109.5h-36.1L286,79.4c-3.9-13.5-8-35.3-8-35.3h-0.5
                c0,0,1.6,23.4,1.6,38.4v106.4h-34.5V3.4H244.4z"
                initial={"hidden"}
                animate={"visible"}
                transition={{ duration: 1, delay: 0.4 }}
                variants={variants}
                />
            <motion.path d="M443.6,96.5c0-55.5,34.8-96.8,89.5-96.8c54.8,0,89.3,41.3,89.3,96.8S587.9,193,533.1,193
                C478.4,193.1,443.6,152.1,443.6,96.5z M584,96.5c0-37.1-16.6-65.9-50.6-65.9S482,59.4,482,96.5c0,36.8,17.4,65.7,51.4,65.7
                S584,133.4,584,96.5z"
                initial={"hidden"}
                animate={"visible"}
                transition={{ duration: 1, delay: 0.6 }}
                variants={variants}
                />
            <motion.path d="M629.6,131.6h36.8c2.6,22.3,15.3,31.1,41.8,31.1c19.2,0,36.1-6.7,36.1-23.9c0-18.2-17.6-21.8-45.9-28.3
                c-33.2-7.5-63.6-16.3-63.6-55c0-36.6,29.8-55.5,71.1-55.5c41.8,0,68.8,20.5,71.6,57.9h-36.1c-2.1-18.7-16.6-28-35.8-28
                c-20.2,0-33.5,8.6-33.5,21.8c0,15.1,13,19.5,40.5,25.4c38.1,8.3,69.3,17.4,69.3,57.3c0,37.6-30.4,58.6-72.1,58.6
                C659.4,193.1,630.9,170.7,629.6,131.6z"
                initial={"hidden"}
                animate={"visible"}
                transition={{ duration: 1, delay: 0.8 }}
                variants={variants}
                />
            <motion.path d="M785.1,3.4h149.2V35h-55.8v153.9h-37.6V35h-55.8L785.1,3.4L785.1,3.4z"
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 1, delay: 1 }}
            variants={variants}
            />
            <motion.path d="M903,162.4c0-17.5,13.2-30.5,29.9-30.5c16.6,0,29.9,13,29.9,30.5c0,17.7-13.2,30.5-29.9,30.5
                S903,180.1,903,162.4z M958,162.4c0-15.2-10.5-26.5-25.1-26.5s-25.1,11.2-25.1,26.5c0,15.4,10.5,26.5,25.1,26.5S958,177.8,958,162.4
                z M921.2,145.6H936c6.1,0,10.1,3.7,10.1,9.1c0,3.8-1.9,6.7-6.1,7.8v0.1c3.3,0.9,4.8,2.9,5,7.1c0.5,4.8,0.5,7.8,1.4,8.3v0.3H941
                c-0.9-0.4-1.1-3.5-1.4-7.4c-0.1-4-2.1-6.2-6.4-6.2h-6.6v13.6h-5.5v-32.7H921.2z M934.8,160.4c3.9,0,5.8-2,5.8-5s-1.8-5.2-5.7-5.2
                h-8.2v10.2H934.8z"
                initial={"hidden"}
                animate={"visible"}
                transition={{ duration: 1, delay: 1.2 }}
                variants={variants}
                />
            </svg>
    );
}

export default InmostTitle;
