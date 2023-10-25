import React from "react";
import Text from "@commons/text";
import { useTheme } from "@emotion/react";
import Container from "@commons/container";

const BlogExcerpt = ({ excerpt }) => {
  const theme = useTheme();

  return (
    <Container width={"65vw"}>
      <Text
        fontFamily={"slant"}
        fontSize={theme.typography.h5}
        as={"h4"}
        lineHeight={"1.4em"}
      >
        {excerpt}
      </Text>
    </Container>
  );
};

export default BlogExcerpt;
