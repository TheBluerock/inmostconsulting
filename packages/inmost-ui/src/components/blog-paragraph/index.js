import React from "react";
import Text from "@commons/text";
import { useTheme, css } from "@emotion/react";
import Spacer from "@components/spacer";

const blogParagraphStyles = (theme) => css`
  color: ${theme.colors.primary};
  line-height: 1.5em;
  font-weight: 400;
  margin: 0 auto;
  max-width: 55vw;

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
    <>
      <Text
        as="p"
        fontSize={theme.typography.h5}
        lineHeight={1.5}
        css={blogParagraphStyles(theme)}
      >
        {children}
      </Text>
      <Spacer space={2} />
    </>
  );
};

export default BlogParagraph;
