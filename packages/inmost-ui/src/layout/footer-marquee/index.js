import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import styled from "@emotion/styled";

function getDayOfYear() {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const millisecondsInADay = 24 * 60 * 60 * 1000;
  const timeDiff = today - startOfYear;
  return Math.floor(timeDiff / millisecondsInADay);
}

const FooterMarquee = () => {
  const [link, setLink] = useState("");

  useEffect(() => {
    const dayOfTheYear = getDayOfYear();
    setLink(`https://lezioni.acim.org/it/chapters/lesson-${dayOfTheYear}`);
  }, []); // Remove dayOfTheYear from the dependency array

  return (
    <Wrapper>
      <Marquee autoFill={true}>
        <MarqueeText href={link} target="_blank" rel="noopener noreferrer">
          Ciò che pensi di essere è una credenza da disfare.
        </MarqueeText>
      </Marquee>
    </Wrapper>
  );
};

export default FooterMarquee;

const MarqueeText = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.h4.desktop};
  font-family: ${({ theme }) => theme.fonts.serif};
  text-transform: uppercase;
  text-decoration: none;
  margin: 24px 12px;
  @media ${({ theme }) => theme.device.large} {
    font-size: ${({ theme }) => theme.typography.h4.tablet};
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.typography.h3.mobile};
  }
`;

const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
`;
