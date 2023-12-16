import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Container from "@commons/container";
import { motion } from "framer-motion";

const StyledParagraph = styled.p`
  text-transform: ${({ uppercase }) => uppercase ? "uppercase" : "inherit" };
  color: ${({ theme, color }) => color || theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.h5.desktop};
  font-family: ${({ theme, sans }) =>
    (sans && theme.fonts.sans) || theme.fonts.serif};
  line-height: 1.35em;
  display: inline-block;
  letter-spacing: 0.02em;
  text-indent: ${({ indent }) => indent ? "30%" : 0};

  & > .bold {
    font-family: ${({ theme }) => theme.fonts.slant};
    text-transform: lowercase;
    display: inline;
    font-size: calc(${({ theme }) => theme.typography.p.desktop} * 1.5);
    letter-spacing: -1%;
    line-height: calc(${({ theme }) => theme.typography.p.desktop} * 1.2);
    text-decoration-style: dashed;
  }

  & > .aside {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 24px;
    margin-right: 3em;
    line-height: 20px;
    font-weight: 600;
    text-transform: uppercase;
  }

  @media ${({ theme }) => theme.device.large} {
    margin: 0 16px;
    font-size: clamp(3vw, ${({ theme }) => theme.typography.h4.tablet}, 5vw);
    line-height: 1.3em;
    & > .bold {
      font-size: calc(${({ theme }) => theme.typography.p.tablet} * 1.5);
    }
  }

  @media ${({ theme }) => theme.device.small} {
    margin: 0 8px;
    font-size: ${({ theme, sans }) => sans ? theme.typography.h4.tablet : theme.typography.h3.tablet};
    line-height: 1.3em;
    & > .bold {
      font-size: calc(${({ theme }) => theme.typography.p.mobile} * 1.2);
    }
    & > .aside {
      display: block;
      font-size: calc(${({ theme }) => theme.typography.p.mobile} * 1.7);
      line-height: 1em;
      margin-bottom: 8px;
      letter-spacing: 0.03em;
    }
  }
`;

const ActionButton = styled(Link)`
  display: inline-block;
`;

const BigParagraph = ({ children, action, sans, color, indent, uppercase }) => {
  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
    <Container width={"67vw"}>
      <StyledParagraph sans={sans} color={color} indent={indent} uppercase={uppercase}>
        {children}
      </StyledParagraph>
      {action && <ActionButton to={action.link}>{action.text}</ActionButton>}
    </Container>
    </motion.div>
  );
};

export default BigParagraph;

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  },
  hidden: {
    y: 200,
    opacity: 0
  }
}
