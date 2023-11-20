import React from "react";
import { useTheme, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import Container from "@commons/container";
import MarginController from "@commons/margin-controller";
import Spacer from "@components/spacer";
import Text from "@commons/text";
import ArticlesRow from "@components/articles-row";

const ArticleCategory = ({ category }) => {
  const theme = useTheme();

  // const categoryTheme = {
  //   ...theme,
  //   colors: category.theme,
  // };

  const categoryTheme = {
    ...theme,
    colors: {
      primary: "#1C2A4E",
      lightPrimary: "#8d94a6",
      secondary: "#BB0808",
      background: "#ede9e9",
    },
  };

  return (
    <ThemeProvider theme={categoryTheme}>
      <OuterWrapper>
        <Spacer space={12} star line />
        <MarginController textAlign={"center"}>
          <Text
            as={"h2"}
            fontSize={theme.typography.h2}
            fontFamily={"serif"}
            textTransform={"uppercase"}
            textAlign={"center"}
            lineHeight={1.1}
          >
            {category && category.name}
          </Text>
          <Spacer space={1} />
          <Container width={"45vw"}>
            <Text
              as={"h4"}
              fontSize={theme.typography.p}
              fontWeight={400}
              fontFamily={"slant"}
            >
              {category && category.description}
            </Text>
          </Container>
          <Spacer space={4} />
          <ArticlesRow articles={category.article} />
        </MarginController>
        <Spacer space={4} />
      </OuterWrapper>
    </ThemeProvider>
  );
};

export default ArticleCategory;

const OuterWrapper = styled.section``;
