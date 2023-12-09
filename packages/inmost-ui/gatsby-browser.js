import React, { useEffect } from "react";
import Layout from "@layout";
import { AppContextProvider, useAppContext } from "@helpers/app-context";
import { AnimatePresence } from "framer-motion";
import GlobalStyles from "@theme/globals";
import * as fontsCss from "@theme/fonts.css";

export const wrapPageElement = ({ element }) => {
  
  const { currentColorTheme } = useAppContext();
  const { isFirstTime, setFirstTime } = useAppContext();
  
  useEffect(() => {
    console.log(isFirstTime)
    isFirstTime === true &&
    setFirstTime(false);
    setTimeout(console.log(isFirstTime), 2000)
  },[])


  return (
    <Layout
      colors={
        currentColorTheme || {
          background: "transaprent",
          primary: "transparent",
        }
      }
    >
      <GlobalStyles style={fontsCss} />
      <AnimatePresence mode="wait" initial>
        {element}
      </AnimatePresence>
    </Layout>
  );
};

export const wrapRootElement = ({ element }) => {
  return <AppContextProvider>{element}</AppContextProvider>;
};
