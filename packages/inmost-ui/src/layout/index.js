import React from "react";
import { ThemeProvider } from "@emotion/react";
import { AppContextProvider } from "@helpers/app-context";
import GlobalStyles from "@theme/globals";
import * as fontsCss from "@theme/fonts.css";
import Header from "@layout/header";
import MenuButton from "@layout/menu-button";
import Spacer from "@components/spacer";
import MenuOverlay from "@layout/menu";
import Footer from "@layout/footer";

const Layout = ({ children, theme }) => {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles style={fontsCss} />
        <Spacer space={7} />
        <MenuButton />
        <MenuOverlay />
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </AppContextProvider>
  );
};

export default Layout;
