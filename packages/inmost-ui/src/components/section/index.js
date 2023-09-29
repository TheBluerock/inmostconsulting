import React from "react";
import Container from "@commons/container";
import styled from "@emotion/styled";

const SectionStc = styled.section`
  display: flex;
  width: 100%;
`;

const Section = ({ children }) => {
  <Container>
    <SectionStc
      role="region"
      aria-labelledby="section-title"
      aria-describedby="section-description"
    >
      {children}
    </SectionStc>
  </Container>;
};

export default Section;
