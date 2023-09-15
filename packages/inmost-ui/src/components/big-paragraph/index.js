import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const StyledParagraph = styled.p`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary };
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.serif };
  line-height: 56px;
  margin: 0 128px;
  dispaly: inline-block;
  & > .bold {
    font-family: ${({ theme }) => theme.fonts.slant };
    text-transform: lowercase;
    font-size: calc(34px * 1.6);
    letter-spacing: -1%;
    line-height: 20px;
    text-decoration-style: dashed;
  }
  & > .aside {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 24px;
    margin-right: 128px;
    line-height: 20px;
    font-weight: 600;
  }
`;

const Aside = styled.h2`
  display: inline-block;
  
`

const ActionButton= styled(Link)`
  display: inline-block;
  
`

const BigParagraph = ({ children, aside, action }) => {
  return (<>
    <StyledParagraph>{children}</StyledParagraph>
    { action && <ActionButton to={action.link}>{ action.text }</ActionButton>}
  </>)
};

export default BigParagraph;