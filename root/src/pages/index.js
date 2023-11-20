import React from 'react';
import theme from '@theme';
import { motion } from 'framer-motion';
import { useAppContext } from '@helpers/app-context';

const text = ['First Line', 'Second Line', 'Third Line'];

const HomePage = () => {
  let HomePageTheme = {
    ...theme,
    colors: {
      primary: 'rgba(187, 8, 8, 1)',
      lightPrimary: 'rgba(187, 8, 8, .2)',
      background: 'rgba(233,237,225, .9)',
    },
  };

  const { setColorTheme } = useAppContext();

  React.useEffect(() => {
    setColorTheme({
      primary: 'rgba(187, 0, 0, 1)',
      background: 'rgba( 255, 255, 255, 1)',
    });
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
      }}
    >
      <h1>Hola</h1>
    </motion.main>
  );
};

export default HomePage;
