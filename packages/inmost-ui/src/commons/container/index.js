import React from 'react';
import styled from '@emotion/styled';

// OuterWrapper styles
const OuterWrapper = styled.div`
  width: 100%;
  max-width: calc(100% - 128px); /* Subtract 64px from both sides */
  margin: 0 auto; /* Center the container horizontally */
`;

// InnerWrapper styles
const InnerWrapper = styled.div`
  width: 100%;
`;

// Container component
const Container = ({ children }) => {
  return (
    <OuterWrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </OuterWrapper>
  );
};

export default Container;
