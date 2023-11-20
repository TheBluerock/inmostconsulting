import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Container from "@commons/container";

const StyledParagraph = styled.p`
  text-transform: uppercase;
  color: ${({ theme, color }) => color || theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.h5.desktop};
  font-family: ${({ theme, sans }) => sans && theme.fonts.sans || theme.fonts.serif};
  line-height: 1.3em;
  display: inline-block;

  & > .bold {
    font-family: ${({ theme }) => theme.fonts.slant};
    text-transform: lowercase;
    font-size: calc(${({ theme }) => theme.typography.p.desktop} * 1.4);
    letter-spacing: -1%;
    line-height: calc(${({ theme }) => theme.typography.p.desktop} * 1.4);
    text-decoration-style: dashed;
  }

  & > .aside {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 24px;
    margin-right: 1em;
    line-height: 20px;
    font-weight: 600;
  }

  @media ${({ theme }) => theme.device.large} {
    margin: 0 16px;
    font-size: clamp(3vw, ${({ theme }) => theme.typography.p.tablet}, 5vw);
    line-height: 1.6em;
    & > .bold {
      font-size: calc(${({ theme }) => theme.typography.p.tablet} * 1.5);
    }
  }

  @media ${({ theme }) => theme.device.small} {
    margin: 0 8px;
    font-size: ${({ theme }) => theme.typography.p.mobile};
    line-height: 1.4em;
    & > .bold {
      font-size: calc(${({ theme }) => theme.typography.p.mobile} * 1.2);
    }
    & > .aside {
      display: block;
      margin-bottom: 8px;
      letter-spacing: 0.03em;
    }
  }
`;

const ActionButton = styled(Link)`
  display: inline-block;
`;

const BigParagraph = ({ children, action, sans, color }) => {
  return (
    <Container width={"65vw"}>
      <StyledParagraph sans={sans} color={color}>{children}</StyledParagraph>
      {action && <ActionButton to={action.link}>{action.text}</ActionButton>}
    </Container>
  );
};

export default BigParagraph;
