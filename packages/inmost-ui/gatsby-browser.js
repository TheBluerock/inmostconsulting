import React from "react";
import Layout from "@layout";
import { AppContextProvider } from "@helpers/app-context";
import { AnimatePresence } from "framer-motion";
import GlobalStyles from "@theme/globals";
import * as fontsCss from "@theme/fonts.css";

export const wrapPageElement = ({ element }) => {
  //const { currentColorTheme } = useAppContext();

  return (
    <AnimatePresence mode="wait">
      <Layout
        colors={{
          background: "rgba(253,255,250, .9)",
          lightPrimary: "rgba(8, 8, 25, .2)",
          secondary: "rgba(187, 8, 8, .9)",
          primary: "rgba(187, 8, 8, .9)",
        }}
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
