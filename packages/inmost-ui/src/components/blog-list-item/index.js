import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import Asterisk from "@components/asterisk";

const BlogListItemStd = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 24px 0;
`;

const AsteriskContainer = styled.span`
  height: 36px;
  width: 36px;
  display: inline-block;
  margin-right: 24px;
`;

const TextContainer = styled.span`
  display: inline-block;
  & > p {
    margin: 0;
  }
`;

const BlogListItem = ({ children }) => {
  const theme = useTheme();

  return (
    <BlogListItemStd>
      <AsteriskContainer>
        <Asterisk size={24} />
      </AsteriskContainer>
      <TextContainer>{children}</TextContainer>
    </BlogListItemStd>
  );
};

export default BlogListItem;
