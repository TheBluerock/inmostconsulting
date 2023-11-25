import React from "react";
import { ThemeProvider } from "@emotion/react";
import MenuButton from "@layout/menu-button";
import Spacer from "@components/spacer";
import MenuOverlay from "@layout/menu";
import Header from "@layout/header";
import Footer from "@layout/footer";
import globalTheme from "@theme";
import { useAppContext } from "@helpers/app-context";

const Layout = ({ children }) => {
  const { currentColorTheme } = useAppContext();

  const pageTheme = {
    ...globalTheme,
    colors: {
      primary: currentColorTheme.primary,
      background: currentColorTheme.background,
      lightPrimary: currentColorTheme.lightPrimary,
      secondary: currentColorTheme.secondary,
    },
  };

  return (
    <ThemeProvider theme={pageTheme}>
      <Spacer space={6} />
      <MenuOverlay />
      <MenuButton />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
