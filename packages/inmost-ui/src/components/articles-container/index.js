import React from "react";
import styled from "@emotion/styled";
import ArticleCard from "@components/article-card";

const ArticleContainer = ({ articles }) => {
  return (
    <>
      <CardsContainer>
        {articles &&
          articles.map((article, index) => (
            <React.Fragment key={article.id}>
              <ArticleCard article={article} />
              {index !== articles.length - 1 && <Line />}
            </React.Fragment>
          ))}
      </CardsContainer>
    </>
  );
};

export default ArticleContainer;

const CardsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  min-height: 320px;
  @media (${({ theme }) => theme.device.small}) {
    flex-direction: column;
  }
`;

const Line = styled.div`
  width: 2px;
  background: ${({ theme }) => theme.colors.primary};
  margin: 0 8px;
`;
