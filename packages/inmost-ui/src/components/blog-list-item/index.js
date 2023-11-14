import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import Asterisk from "@components/asterisk";

const BlogListItemStd = styled.li`
  display: flex;
  flex-direction: row;
  margin: 24px 0;
  align-items: start;
`;

const AsteriskContainer = styled.span`
  position: relative;
  top: 8px;
  width: 48px;
  display: inline-block;
  margin-right: 24px;

  @media ${({ theme }) => theme.device.small} {
    display: inline;
    width: 128px;
    height: 100%;
  }
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
