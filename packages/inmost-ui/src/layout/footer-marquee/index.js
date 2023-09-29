import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import styled from "@emotion/styled";

const FooterMarquee = () => {
  return (
    <Wrapper>
      <Marquee autoFill={true}>
        <MarqueeText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus
          libero mauris, quis auctor odio consequat sed. [T14:4 6,7];
        </MarqueeText>
      </Marquee>
    </Wrapper>
  );
};

export default FooterMarquee;

const MarqueeText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.serif};
  text-transform: uppercase;
  margin: 24px 0;
`;
const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
`;
