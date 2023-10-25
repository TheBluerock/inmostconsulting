import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { TransitionLink as TLink } from "gatsby-plugin-transition-link/components/TransitionLink";
import Asterisk from "@components/asterisk";

const LinkWrapper = styled.li`
  list-style: none;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(TLink)`
    color: ${({ theme }) => theme.colors.primary} !important;
    font-size: ${({ theme }) => theme.typography.h5.desktop};
    font-family: "Ogg Slant", serif;
    letter-spacing: -0.02em;
    text-decoration: none;
    @media ${({ theme }) => theme.device.medium}{
      font-size: ${({ theme }) => theme.typography.h5.tablet};
    }
    @media ${({ theme }) => theme.device.xsmall}{
      font-size: ${({ theme }) => theme.typography.h3.mobile};
    }
}`;

const StyledA = styled.a`
  color: ${({ theme }) => theme.colors.primary} !important;
  font-size: ${({ theme }) => theme.typography.h5.desktop};
  font-family: "Ogg Slant", serif;
  letter-spacing: -0.02em;
  text-decoration: none;
  @media ${({ theme }) => theme.device.medium} {
    font-size: ${({ theme }) => theme.typography.h5.tablet};
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.typography.h3.mobile};
  }
`;

const IconWrapper = styled.div`
  height: 3vw;
  width: 3vw;
  margin-right: 8px;
  @media ${({ theme }) => theme.device.medium} {
    display: none;
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
