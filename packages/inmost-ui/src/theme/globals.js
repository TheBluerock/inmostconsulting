import React from "react";
import { Global, css, useTheme } from "@emotion/react";

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        :root {
          box-sizing: border-box;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
          margin: 0;
          padding: 0;
          border: 0;
        }

        html,
        body {
          width: 100%;
          min-height: 100vh;
          background-color: ${theme.colors.background};
          font-family: "Neue Haas Grotesque", sans-serif;
          -webkit-tap-highlight-color: transparent;
          scroll-snap-type: y mandatory;
        }
      `}
    />
  );
};

export default GlobalStyles;
