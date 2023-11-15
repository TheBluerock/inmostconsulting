import React from "react";
import styled from "@emotion/styled";
import Spacer from "@components/spacer";
import Text from "@commons/text";
import { useTheme } from "@emotion/react";
import StarPositive from "@components/star-positive";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const CardWrapper = styled(Link)`
  cursor: pointer;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: transparent;
  margin: 0 8px;:
  transition: background 0.5s ease-in;
  text-decoration: none;
  border-radius: 24px 24px 0 0;
  &:hover {
    background: ${({ theme }) => theme.colors.lightPrimary};
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 32px;
`;

const CardImage = styled.div`
  aspect-ratio: 3/2;
  background: ${({ theme }) => theme.colors.lightPrimary};
  border-radius: 24px 24px 0 0;
  overflow: hidden;
`;

const CardTitle = styled.div`
  margin: 4px 0;
`;

const CardExcerpt = styled.div`
  margin: 4px 0;
`;

const StarContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  margin: 8px 0;
`;

const ArticleCard = ({ article }) => {
  const theme = useTheme();

  const pruneString = (inputString, maxLength) => {
    return inputString.length <= maxLength
      ? inputString
      : `${inputString.slice(0, maxLength - 3)}...`;
  };

  return (
    <CardWrapper
      to={`/risorse/articoli/${article.slug}/`}
      >
      <CardImage>
        <GatsbyImage
          image={article.heroImage.gatsbyImageData}
          alt={article.heroImage.title}
        />
      </CardImage>
      <div style={{ padding: "0 8px" }}>

      <CardHeader>
        <Text fontSize={theme.typography.p}>
          in <span style={{ fontWeight: 600 }}>{article.category.name}</span>
        </Text>
        <Text fontSize={theme.typography.p}>{article.date}</Text>
      </CardHeader>
      <StarContainer>
        <StarPositive />
      </StarContainer>
      <Spacer space={1} />
      <CardTitle>
        <Text
          as={"h2"}
          fontSize={theme.typography.h5}
          fontFamily={"serif"}
          textTransform={"uppercase"}
          lineHeight={1.12}
          >
          {pruneString(article.title, 35)}
        </Text>
        <Text
          as={"h5"}
          fontSize={theme.typography.p}
          lineHeight={1.12}
          >
        </Text>
      </CardTitle>
      <Spacer space={2} />
      <CardExcerpt>
        <Text
          as={"p"}
          fontSize={theme.typography.p}
          lineHeight={1.5}
          fontFamily={"sans"}
          >
          {pruneString(article.excerpt, 76)}
        </Text>
        <Spacer space={2} />
      </CardExcerpt>
      </div>
    </CardWrapper>
  );
};

export default ArticleCard;
