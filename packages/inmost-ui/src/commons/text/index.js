import React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const Text = ({
  as: TextComponent = "span",
  children,
  fontFamily,
  ...props
}) => {
  // Access the theme object
  const theme = useTheme();

  // Determine the font family based on the fontType prop
  const getFontFamily = () => {
    switch (fontFamily) {
      case "serif":
        return theme.fonts.serif;
      case "slant":
        return theme.fonts.slant;
      case "sans":
      default:
        return theme.fonts.sans;
    }
  };

  // Define common styles for the text

  const StyledText = styled(TextComponent)`
    color: ${(props) => props.color || theme.colors.primary};
    font-size: ${(props) => props.fontSize.desktop};
    font-family: ${getFontFamily()};
    text-align: ${(props) => props.textAlign};
    line-height: ${(props) => props.lineHeight};
    max-width: ${(props) => props.maxWidth};
    font-weight: ${(props) => props.fontWeight};
    letter-spacing: ${(props) => props.letterSpacing};
    text-transform: ${(props) => props.textTransform};
    opacity: ${(props) => props.opacity};
    display: ${(props) => props.display};
    margin: ${(props) => props.m};
    margin-bottom: ${(props) => props.mb};
    margin-top: ${(props) => props.mt};
    padding: ${(props) => props.p};
    position: ${(props) => props.position};
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    transform: ${(props) => props.transform};
    z-index: ${(props) => props.zIndex};
    padding-top: ${(props) => props.pt};
    @media ${({ theme }) => theme.device.large} {
      font-size: ${(props) => props.fontSize.tablet};
    }
    @media ${({ theme }) => theme.device.xxsmall} {
      font-size: ${(props) => props.fontSize.mobile};
    }
  `;

  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
