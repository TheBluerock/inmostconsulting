import React from "react";
import Text from "@commons/text";
import Container from "@commons/container";
import styled from "@emotion/styled";
import Spacer from "@components/spacer";

const StyledContainer = styled(Container)``;

const BlogHeading = ({
  children,
  as,
  fontSize,
  serif,
  fontWeight,
  textTransform,
}) => {
  return (
    <>
      {as !== "h1" && <Spacer space={12} line star />}
      <StyledContainer width={"65vw"}>
        <Text
          as={as}
          fontSize={fontSize}
          fontFamily={serif && "serif"}
          lineHeight={"1.1em"}
          fontWeight={fontWeight}
          textTransform={textTransform}
        >
          {children}
        </Text>
      </StyledContainer>
      <Spacer space={4} />
    </>
  );
};

export default BlogHeading;
