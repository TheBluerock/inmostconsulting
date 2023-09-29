// import React, { useEffect } from 'react';
// import styled from '@emotion/styled';
// import { motion, useAnimation } from 'framer-motion';
// import Text from '@commons/text';
// import { useAppContext } from '@helpers/app-context'; // Import the context
// import { Link, useLocation } from 'gatsby'; // Import useLocation from Gatsby

// const LangSwitchStc = styled.div`
//   height: 64px;
//   width: 64px;
//   border-radius: 50%;
//   border: 2px solid ${({ theme }) => theme.colors.primary};
//   overflow: hidden;
//   display: flex;
//   justify-content: center; /* Center the content horizontally */
//   align-items: center; /* Center the content vertically */
//   cursor: pointer;
// `;

// const LangSwitch = () => {

//   const { selectedLocale, toggleLocale } = useAppContext(); // Access context values

//   const controls = useAnimation();

//   useEffect(() => {
//     // Animate the motion.div when selectedLocale changes
//     controls.start({
//       opacity: 1,
//       scale: 1,
//     });
//   }, [selectedLocale, controls]);

//   const location = useLocation(); // Get the current location
//   const currentPath = location.pathname; // Get the current page path

//   return (
//     <LangSwitchStc onClick={toggleLocale}>
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={controls}
//         exit={{ opacity: 0, scale: 0.8 }}
//         transition={{ duration: 0.3 }}
//         key={selectedLocale} // Use the selectedLocale as the key to trigger re-renders
//       >
//         <Link to={`/${selectedLocale === 'it' ? 'en' : 'it' }${currentPath}`}>
//             <Text fonttype="serif" as="span" size={24}>
//             {selectedLocale}
//             </Text>
//         </Link>
//       </motion.div>
//     </LangSwitchStc>
//   );
// };

// export default LangSwitch;
