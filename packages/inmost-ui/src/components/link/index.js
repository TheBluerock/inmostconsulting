import React from "react";
import { Link as GLink } from "gatsby";
import { useTheme, css } from "@emotion/react";
import styled from "@emotion/styled";
import Text from "@commons/text";

const StyledAnchor = styled.a`
  /* Common styles */
  margin: 0 8px;
  position: relative;
  text-decoration: underline;
  color: ${({ theme, color }) => color || theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.slant};

  /* Conditional underline */
  text-decoration: ${({ underline, color }) =>
    underline ? `underline dotted ${color || "inherit"}` : "none"};

  /* Pseudo-classes */
  &:active,
  &:visited {
    color: ${({ theme, color }) => color || theme.colors.primary};
  }

  /* Media queries */
  @media ${({ theme }) => theme.device.large} {
    /* Large screen styles */
  }

  @media ${({ theme }) => theme.device.small} {
    /* Small screen styles */
  }
`;

const StyledLink = styled(GLink)`
  text-decoration: none;
  color: ${({ theme, color }) => color || theme.colors.primary};
  margin: 0 8px;
  position: relative;
  text-decoration: ${({ underline, color }) =>
    underline ? `underline dotted ${color}` : "none"};
  &:active,
  &:visited {
    color: ${({ theme, color }) => color || theme.colors.primary};
  }

  @media ${({ theme }) => theme.device.large} {
  }
  @media ${({ theme }) => theme.device.small} {
  }
`;

const Wrapper = styled.span`
  display: inline-block;
  position: relative;
`;

const Ellipse = styled.span`
  border: 1px solid
    ${({ theme, color }) => (color ? color : theme.colors.primary)};
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  z-index: -1;
  transform: rotate(-15deg);
`;

const Link = ({ to, text, color, ellipse, underline, fontFamily }) => {
  const isInternal = isInternalLink(to);
  const theme = useTheme();

  if (isInternal) {
    return (
      <Wrapper>
        <StyledLink
          to={to}
          underline={underline && underline.toString()}
          color={color}
          aria-label={`Go to ${text}`}
        >
          <Text
            fontFamily={fontFamily || "slant"}
            fontSize={theme.typography.p}
            color={color}
          >
            {text}
          </Text>
        </StyledLink>
        {ellipse && <Ellipse color={color} />}
      </Wrapper>
    );
  } else {
    return (
      <StyledAnchor
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        color={color}
        underline={underline}
      >
        {text}
      </StyledAnchor>
    );
  }
};

export default Link;

// Function to check if a link is internal
const isInternalLink = (to) => {
  return /^\/(?!\/)/.test(to); // Assumes internal links start with a single forward slash '/'
};
