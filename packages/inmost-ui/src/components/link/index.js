import React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { useTheme, css } from "@emotion/react";
import styled from "@emotion/styled";
import gsap from "gsap";
import Text from "@commons/text";

const styles = css`
  text-decoration: none;
  color: ${({ theme, color }) => (color ? color : theme.colors.primary)};
  margin: 0 8px;
  position: relative;

  &:active,
  &:visited {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media ${({ theme }) => theme.device.large} {
  }
  @media ${({ theme }) => theme.device.small} {
  }
`;

const StyledLink = styled(TransitionLink)`
  text-decoration: none;
  color: ${({ theme, color }) => (color ? color : theme.colors.primary)};
  margin: 0 8px;
  position: relative;
  text-decoration: ${({ underline, color }) =>
    underline ? `underline dotted ${color}` : "none"};
  &:active,
  &:visited {
    color: ${({ theme }) => theme.colors.primary};
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

const Link = ({ to, text, color, ellipse, underline }) => {
  const isInternal = isInternalLink(to);
  const theme = useTheme();
  const exitAnimation = (node) => {
    const tl = gsap.timeline();
    tl.to(node, { opacity: 0, duration: 1 });
    return tl;
  };

  const entryAnimation = (node) => {
    const tl = gsap.timeline();
    tl.from(node, { opacity: 0, duration: 2 });
    return tl;
  };

  if (isInternal) {
    return (
      <Wrapper>
        <StyledLink
          to={to}
          underline={underline.toString()}
          color={color}
          exit={{
            trigger: ({ node }) => exitAnimation(node),
            length: 1,
          }}
          entry={{
            trigger: ({ node }) => entryAnimation(node),
            length: 2,
          }}
          aria-label={`Go to ${text}`}
        >
          <Text
            fontFamily={"slant"}
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
      <a href={to} target="_blank" rel="noopener noreferrer" css={styles}>
        {text}
      </a>
    );
  }
};

export default Link;

// Function to check if a link is internal
const isInternalLink = (to) => {
  return /^\/(?!\/)/.test(to); // Assumes internal links start with a single forward slash '/'
};
