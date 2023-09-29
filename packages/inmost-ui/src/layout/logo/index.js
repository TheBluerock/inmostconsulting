import React, { useState, useEffect } from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import styled from "@emotion/styled";
import Asterisk from "@layout/animated-asterisk";
import { css, keyframes } from "@emotion/react";
import { gsap } from "gsap";
import { useTheme } from "@emotion/react";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import { useAppContext } from "@helpers/app-context";

const styles = css`
  font-size: 34px;
  text-transform: uppercase;
  text-decoration: none;
  @media ${({ theme }) => theme.device.small} {
    font-size: 28px;
  }
`;

const StyledLink = styled(TransitionLink)`
  font-size: 34px;
  text-transform: uppercase;
  text-decoration: none;
  @media ${({ theme }) => theme.device.small} {
    font-size: 8vw;
  }
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
  margin-right: 8px;
  height: 36px;
  width: 36px;
  animation: ${(props) => (props.active ? rotate : "none")} 20s linear infinite;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in;
  @media ${({ theme }) => theme.device.small} {
    height: 32px;
    width: 32px;
  }
`;

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
`;

const Logo = () => {
  const theme = useTheme();
  const [name, setName] = useState(null);
  const { pathname } = useLocation();
  const { isDevice } = useAppContext();

  const data = useStaticQuery(graphql`
    query SiteNameQuery {
      site {
        siteMetadata {
          name
        }
      }
    }
  `);

  const siteName = data.site.siteMetadata.name;

  // Simplify the getName function
  const getName = (pathname) => {
    const parts = pathname.replace(/(^\/|\/$)/g, "").split("/");
    if (parts.length >= 2) {
      return parts[1]; // Return the second level
    } else {
      return parts[0]; // Return an empty string if there's no second level
    }
  };

  useEffect(() => {
    setName(pathname === "/" ? siteName : getName(pathname));
    console.log(name, pathname, getName(pathname));
  }, [pathname]);

  const exitAnimation = (node) => {
    const tl = gsap.timeline();
    tl.to(node, { opacity: 0, duration: 1 });
    return tl;
  };

  const entryAnimation = (node) => {
    const tl = gsap.timeline();
    tl.from(node, { opacity: 0, duration: 1 });
    return tl;
  };

  return (
    <OuterWrapper>
      <AsteriskWrapper active={true} aria-label={`${name} is active`}>
        <Asterisk active={true} size={isDevice === "mobile" ? 32 : 36} />
      </AsteriskWrapper>
      <StyledLink
        to={pathname}
        exit={{
          trigger: ({ node }) => exitAnimation(node),
          length: 1,
        }}
        entry={{
          delay: 0.5,
          trigger: ({ node }) => entryAnimation(node),
          length: 1,
        }}
        css={styles}
        style={{ color: theme.colors.primary }}
        aria-label={`Go to ${name}`}
      >
        {name}
      </StyledLink>
    </OuterWrapper>
  );
};

export default Logo;
