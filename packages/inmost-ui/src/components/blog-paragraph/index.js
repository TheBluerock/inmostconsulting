import React from "react";
import Text from "@commons/text";
import { useTheme, css } from "@emotion/react";

const blogParagraphStyles = (theme) => css`
  color: ${theme.colors.primary};
  line-height: 1.6em;
  font-weight: 400;
  margin: 0 auto;
  max-width: 55vw;
  margin-bottom: 1em;

  @media ${theme.device.medium} {
    max-width: 80vw;
    margin: 0 auto;
  }

  @media ${theme.device.small} {
    max-width: 100%;
    margin: 0 8px;
  }
`;

const BlogParagraph = ({ children }) => {
  const theme = useTheme();

  return (
    <Text as="p" fontSize={theme.typography.p} css={blogParagraphStyles(theme)}>
      {children}
    </Text>
  );
};

export default BlogParagraph;
