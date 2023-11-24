import React from "react";
import { ThemeProvider } from "@emotion/react";
import MenuButton from "@layout/menu-button";
import Spacer from "@components/spacer";
import MenuOverlay from "@layout/menu";
import Header from "@layout/header";
import Footer from "@layout/footer";
import globalTheme from "@theme";
import { motion } from "framer-motion";

const Layout = ({ children, colors }) => {
  
  const pageTheme = {
    ...globalTheme,
    colors: colors,
  };

  return (
    <ThemeProvider theme={pageTheme}>
      <Spacer space={6} />
      <MenuOverlay />
      <MenuButton />
      <Header />
      <motion.main
        initial={{ opacity: 0, y: "50vh" }}
        animate={{ opacity: 1, y: "0px" }}
        exit={{ opacity: 0, y: "-500px" }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        {children}
      </motion.main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
