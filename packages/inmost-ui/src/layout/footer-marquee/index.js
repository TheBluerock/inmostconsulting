import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import styled from "@emotion/styled";
import { lessons } from './lessons';

function getDayOfYear() {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const millisecondsInADay = 24 * 60 * 60 * 1000;
  const timeDiff = today - startOfYear;
  return Math.floor(timeDiff / millisecondsInADay);
}

const FooterMarquee = () => {
  const [dayOfTheYear, setDayOfTheYeat] = useState("");
  const [lession, setLesson] = useState("");

  useEffect(() => {
    const day = getDayOfYear();
    setDayOfTheYeat(day);
    setLesson(lessons[day-1]);
  }, []); // Remove dayOfTheYear from the dependency array

  return (
    <Wrapper>
      <Marquee autoFill={true}>
        <MarqueeText href={`https://lezioni.acim.org/it/chapters/lesson-${dayOfTheYear}`} target="_blank" rel="noopener noreferrer">
          {`Lezione numero ${dayOfTheYear}: ${lession} •`}
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
