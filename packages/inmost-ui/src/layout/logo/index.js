import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import Asterisk from "@layout/animated-asterisk";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import { useAppContext } from "@helpers/app-context";

const StyledLink = styled(Link)`
  font-size: 36px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  @media ${({ theme }) => theme.device.small} {
    font-size: clamp(7vw, 8vw, 8.5vw);
  }
`;

const AsteriskWrapper = styled(motion.span, {
  shouldForwardProp: (prop) => prop !== "active",
})`
  margin-right: 8px;
  height: 36px;
  width: 36px;
  opacity: ${({ active }) => (active ? 1 : 0)};
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
  justify-content: center;
  margin: 0;
`;

const Logo = () => {
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
    const cleaned = parts.map((part) => part.replace(/-/g, " "));

    if (cleaned.length >= 2) {
      return cleaned[1];
    } else {
      return cleaned[0];
    }
  };

  useEffect(() => {
    setName(pathname === "/" ? siteName : getName(pathname));
  }, [pathname]);

  return (
    <OuterWrapper>
      <AsteriskWrapper
        animate={{ rotate: 360 }}
        transition={{ duration: 20, loop: Infinity }}
        active
      >
        <Asterisk size={isDevice === "mobile" ? 33 : 36} />
      </AsteriskWrapper>
      <StyledLink
        to={pathname}
        exit={{ opacity: 0, duration: 1 }}
        entry={{ opacity: 0, duration: 1, delay: 0.5 }}
      >
        {name}
      </StyledLink>
    </OuterWrapper>
  );
};

export default Logo;
