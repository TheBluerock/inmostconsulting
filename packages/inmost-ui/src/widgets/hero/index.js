import React from "react";
import styled from "@emotion/styled";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 48px;
`;

const HeroRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  &.start {
    justify-content: flex-start;
  }
  &.end {
    justify-content: flex-end;
  }
  &.around {
    justify-content: space-around;
  }
`;

const HeroItem = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(72px, 120px, 144px);
  font-weight: 100;
  line-height: 1;
  margin: 0;
  padding: 0;

  text-transform: uppercase;
  & > .lowercase {
    text-transform: lowercase;
  }
`;

const RowImage = styled.div`
  display: inline-block;
  flex-grow: 1;
  border-radius: 500px;
  margin: 0 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const Hero = () => {
  return (
    <h1>
      <HeroWrapper>
        <HeroRow>
          <HeroItem>
            <span className="lowercase">a</span>&nbsp;chi&nbsp;
            <span className="lowercase"> non vede </span>&nbsp;pace,
          </HeroItem>
        </HeroRow>
        <HeroRow className="around">
          <HeroItem>mostriamo</HeroItem>
          <RowImage />
        </HeroRow>
        <HeroRow>
          <HeroItem>
            <span className="lowercase">La</span>&nbsp;via
          </HeroItem>
          <HeroItem>
            <span className="lowercase">del</span>&nbsp;perdono.
          </HeroItem>
        </HeroRow>
      </HeroWrapper>
    </h1>
  );
};

export default Hero;
