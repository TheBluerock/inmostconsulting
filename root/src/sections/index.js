import React from 'react';
import styled from '@emotion/react';

const SectionStc = styled.section``;

const Section = ({ children, ...props }) => {
  return <SectionStc {...props}>{children}</SectionStc>;
};

export default Section;
