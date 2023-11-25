import React from "react";
import Layout from "@layout";
import { AppContextProvider } from "@helpers/app-context";
import { AnimatePresence } from "framer-motion";
import GlobalStyles from "@theme/globals";
import * as fontsCss from "@theme/fonts.css";

export const wrapPageElement = ({ element }) => {
  return (
    <Layout>
      <GlobalStyles style={fontsCss} />
      <AnimatePresence mode="wait">{element}</AnimatePresence>
    </Layout>
  );
};

export const wrapRootElement = ({ element }) => {
  return <AppContextProvider>{element}</AppContextProvider>;
};
