import React from "react";
import Marquee from "react-fast-marquee";
import styled from "@emotion/styled";
import Text from "@commons/text";
import { useTheme } from "@emotion/react";

const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

const InnerText = styled.span`
  font-size: ${({ theme }) => theme.typography.h3};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.serif};
  text-transform: uppercase;
  & > .slant {
    font-family: ${({ theme }) => theme.fonts.slant};
    margin: 0 24px;
    text-transform: lowercase;
  }
`;

const TitleMarquee = ({ text, color }) => {
  const theme = useTheme();

  const title = ` ${text} /`;

  return (
    <Wrapper>
      <Marquee autoFill={true} play>
        <Text
          as={"h1"}
          fontSize={theme.typography.h2}
          direction={"right"}
          fontFamily={"serif"}
          textTransform={"uppercase"}
          style={{ marginLeft: "0.45em" }}
          color={color}
        >
          {title}
        </Text>
      </Marquee>
    </Wrapper>
  );
};

export default TitleMarquee;
