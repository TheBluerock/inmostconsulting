import React from "react";
import { ThemeProvider } from "@emotion/react";
import MenuButton from "@layout/menu-button";
import Spacer from "@components/spacer";
import MenuOverlay from "@layout/menu";
import Header from "@layout/header";
import Footer from "@layout/footer";
import globalTheme from "@theme";

const Layout = ({ children, colors }) => {

  const pageTheme = {
    ...globalTheme,
    colors: colors,
  };

  return (
    <ThemeProvider theme={pageTheme}>
      <Spacer space={5} />
      <MenuButton />
      <MenuOverlay />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
