import React from 'react';
import styled from '@emotion/styled';

// Define the styled grid container
const GridContainer = styled.span`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, auto);
  row-gap: 20px;
  width: 100%;
  height: auto;
`;

// Your React component
const HeroContainer = ({ children }) => {
  return (
    <GridContainer>
      { children }
    </GridContainer>
  );
}

export default HeroContainer;
