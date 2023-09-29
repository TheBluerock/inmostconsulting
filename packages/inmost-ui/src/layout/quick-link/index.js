import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { TransitionLink as TLink } from "gatsby-plugin-transition-link/components/TransitionLink";
import Asterisk from "@components/asterisk";

const LinkWrapper = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(TLink)`
    color: ${({ theme }) => theme.colors.primary} !important;
    font-size: ${({ theme }) => theme.typography.h4.desktop}px;
    font-family: "Ogg Slant", serif;
    letter-spacing: -0.02em;
    text-decoration: none;
}`;

const StyledA = styled.a`
  color: ${({ theme }) => theme.colors.primary} !important;
  font-size: ${({ theme }) => theme.typography.h4.desktop}px;
  font-family: "Ogg Slant", serif;
  letter-spacing: -0.02em;
  text-decoration: none;
`;

const IconWrapper = styled.div`
  position: relative;
  top: 2px;
  height: 48px;
  width: 48px;
  margin-right: 8px;
  @media ${({ theme }) => theme.device.small} {
    top: 0;
    height: 36px;
    width: 36px;
    margin-right: 16px;
  }
`;

const isInternalLink = (to) => {
  return /^\/(?!\/)/.test(to); // Assumes internal links start with a single forward slash '/'
};

const QuickLink = ({ to, text }) => {
  return (
    <LinkWrapper>
      <IconWrapper>
        <Asterisk />
      </IconWrapper>
      {isInternalLink(to) ? (
        <StyledLink to={to}>{text}</StyledLink>
      ) : (
        <StyledA href={to} target="_blank" rel="noopener noreferrer">
          {text}
        </StyledA>
      )}
    </LinkWrapper>
  );
};

export default QuickLink;
