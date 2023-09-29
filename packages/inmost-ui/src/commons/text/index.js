import React from "react";
import { useTheme } from "@emotion/react";

const Text = ({
  as: Tag = "span",
  children,
  size,
  fonttype,
  center,
  uppercase,
  ...props
}) => {
  // Access the theme object
  const theme = useTheme();

  // Determine the font family based on the fontType prop
  const getFontFamily = () => {
    switch (fonttype) {
      case "serif":
        return theme.fonts.serif;
      case "slant":
        return theme.fonts.slant;
      case "sans":
      default:
        return theme.fonts.sans;
    }
  };

  // Determine the typography size based on the 'size' prop or use default size

  // Define common styles for the text

  const commonStyles = {
    color: theme.colors.primary,
    fontWeight: 400,
    fontFamily: getFontFamily(),
    fontStyle: "normal",
    lineHeight: "1em",
    textTransform: uppercase && "uppercase",
    textAlign: center && "center",
    margin: `0 0 ${({ bottom }) => (bottom ? bottom * 8 + "px" : 0)} 0`,
  };

  // Define responsive styles using CSS media queries
  const responsiveStyles = {
    ...commonStyles,
    fontSize: theme.typography.p.mobile, // Default to mobile size

    // Media queries for different screen sizes
    [`@media ${theme.device.medium}`]: {
      fontSize: theme.typography.h1.tablet,
    },
    [`@media ${theme.device.xxlarge}`]: {
      fontSize: size || theme.typography.h1.desktop,
    },
  };

  return (
    <Tag css={responsiveStyles} {...props}>
      {children}
    </Tag>
  );
};

export default Text;
