import React, { useLayoutEffect, useState } from "react";
import Layout from "@layout";
import { AppContextProvider, useAppContext } from "@helpers/app-context";
import { motion, AnimatePresence } from "framer-motion";
import GlobalStyles from "@theme/globals";
import * as fontsCss from "@theme/fonts.css";

export const wrapPageElement = ({ element }) => {
  // This is to optimize

  const { currentColorTheme } = useAppContext();

  return (
    <AnimatePresence mode="wait">
      <Layout colors={currentColorTheme}>
        <GlobalStyles style={fontsCss} />
          {element}
      </Layout>
    </AnimatePresence>
  );
};

export const wrapRootElement = ({ element }) => {
  return (
    <AppContextProvider>
    {element}
    </AppContextProvider>);
};

export const onPreRouteUpdate = () => {};

export const onRouteUpdate = ({ location, prevLocation }) => {};
