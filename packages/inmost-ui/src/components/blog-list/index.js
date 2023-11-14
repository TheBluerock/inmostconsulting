import React from "react";
import Container from "@commons/container";
import styled from "@emotion/styled";
import Spacer from "@components/spacer";

const BlogListStd = styled.ul`
  list-style: none;
`;

const BlogList = ({ children }) => {
  return (
    <>
      <Container width={"55vw"}>
        <BlogListStd>{children}</BlogListStd>
      </Container>
      <Spacer space={2} />
    </>
  );
};

export default BlogList;
