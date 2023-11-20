import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { useLocation } from "@reach/router";
import Asterisk from "@layout/animated-asterisk";
import { globalHistory } from "@reach/router";

NavLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.h5.desktop};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.sans};
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
  const [isActive, setIsActive] = useState(true);
  const [render, setRender] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsActive(url === pathname);

    return globalHistory.listen(({ action }) => {
      if (action === "PUSH") setRender(true);
    });
  }, [url, pathname]);

  console.log("isActive: " + isActive + "render:" + render);

  return (
    <OuterWrapper>
      {asterisk && (
        <AsteriskWrapper active={isActive} aria-label={`${text} is active`}>
          {isActive && <Asterisk size={36} />}
        </AsteriskWrapper>
      )}

      <StyledLink to={url} aria-label={`Go to ${text}`}>
        {text}
      </StyledLink>
    </OuterWrapper>
  );
}

export default NavLink;
