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
  React.useEffect(() => {
    console.log(theme);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <GlobalStyles style={fontsCss} />
        <Spacer space={12} />
        <MenuButton />
        <MenuOverlay />
        <Header />
        <main>{children}</main>
        <Footer />
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default Layout;
