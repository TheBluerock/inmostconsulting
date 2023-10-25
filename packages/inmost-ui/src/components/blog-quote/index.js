import React from "react";
import styled from "@emotion/styled";

const OuterWrapper = styled.blockquote``;

const BlogQuote = ({ children }) => {
  return <OuterWrapper>{children}</OuterWrapper>;
};

export default BlogQuote;
