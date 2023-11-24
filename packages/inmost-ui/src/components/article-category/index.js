import React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Container from "@commons/container";
import MarginController from "@commons/margin-controller";
import Spacer from "@components/spacer";
import Text from "@commons/text";
import ArticlesRow from "@components/articles-row";
import TitleMarquee from "@components/marquee-title";

const ArticleCategory = ({ category }) => {
  const theme = useTheme();

  return (
    <OuterWrapper>
      <Spacer space={4} line />
      <Spacer star />
      <Spacer space={2} />
      <TitleMarquee
        text={category && category.name}
        color={theme.colors.secondary}
      />
      <Spacer space={1} />
      <MarginController textAlign={"center"}>
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
  );
};

export default ArticleCategory;

const OuterWrapper = styled.section``;
