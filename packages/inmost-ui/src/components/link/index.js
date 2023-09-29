import React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { css } from "@emotion/styled";
import { useTheme } from "@emotion/react";
import gsap from "gsap";

const styles = css`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  &:active,
  &:visited {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media ${({ theme }) => theme.device.large} {
  }
  @media ${({ theme }) => theme.device.small} {
  }
`;

const Link = ({ to, text }) => {
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
      <TransitionLink
        to={to}
        exit={{
          trigger: ({ node }) => exitAnimation(node),
          length: 1,
        }}
        entry={{
          trigger: ({ node }) => entryAnimation(node),
          length: 2,
        }}
        css={styles}
        style={{ color: theme.colors.primary }}
        aria-label={`Go to ${text}`}
      >
        {text}
      </TransitionLink>
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
