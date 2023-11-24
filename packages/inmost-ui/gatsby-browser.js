import React from "react";
import Layout from "@layout";
import { AppContextProvider, useAppContext } from "@helpers/app-context";
import { AnimatePresence } from "framer-motion";
import GlobalStyles from "@theme/globals";
import * as fontsCss from "@theme/fonts.css";

export const wrapPageElement = ({ element }) => {
  const { currentColorTheme } = useAppContext();

  return (
    <AnimatePresence mode="wait">
      <Layout
        colors={
          currentColorTheme || {
            background: "transaprent",
            primary: "transparent",
          }
        }
      >
        <GlobalStyles style={fontsCss} />
        {element}
      </Layout>
    </AnimatePresence>
  );
};

export const wrapRootElement = ({ element }) => {
  return <AppContextProvider>{element}</AppContextProvider>;
};
