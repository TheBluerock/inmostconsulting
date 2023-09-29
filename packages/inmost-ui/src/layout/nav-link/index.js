import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TransitionLink from "gatsby-plugin-transition-link";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { gsap } from "gsap";
import { useTheme } from "@emotion/react";
import { useLocation } from "@reach/router";
import Asterisk from "@layout/animated-asterisk";

NavLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const styles = css`
  text-decoration: none;
  font-size: 34px;
  text-transform: uppercase;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const AsteriskWrapper = styled.span`
  position: relative;
  margin-right: 8px;
  height: 36px;
  width: 36px;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in;
`;

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 12px;
  margin-left: 12px;

  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

function NavLink({ url, text, asterisk }) {
  const theme = useTheme();
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsActive(url === pathname);
  }, [url, pathname]);

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

  return (
    <OuterWrapper>
      {asterisk && (
        <AsteriskWrapper active={isActive} aria-label={`${text} is active`}>
          <Asterisk active={isActive} size={36} />
        </AsteriskWrapper>
      )}

      <TransitionLink
        to={url}
        exit={{
          trigger: ({ node }) => exitAnimation(node),
          length: 1,
        }}
        entry={{
          trigger: ({ node }) => entryAnimation(node),
          length: 1,
        }}
        css={styles}
        style={{ color: theme.colors.primary }}
        aria-label={`Go to ${text}`}
      >
        {text}
      </TransitionLink>
    </OuterWrapper>
  );
}

export default NavLink;
