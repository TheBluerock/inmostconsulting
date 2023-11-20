import React from 'react';
import { graphql } from 'gatsby';
import ArticleCategory from '@components/article-category';
import ArticlesTitle from '@components/articoli';
import { useTheme } from '@emotion/react';
import { motion } from 'framer-motion';
import Spacer from '@components/spacer';
import MarginController from '@commons/margin-controller';

const ArticlePage = ({ data }) => {
  const theme = useTheme();

  const categories = data.allContentfulCategory.edges;

  return (
    <motion.div
      initial={{ opacity: 0, y: '500px' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.75,
      }}
    >
      <Spacer space={4} line />
      <MarginController>
        <ArticlesTitle theme={theme} />
      </MarginController>
      {categories.map(
        ({ node }) =>
          node.article && <ArticleCategory key={node.id} category={node} />
      )}
    </motion.div>
  );
};

export default ArticlePage;

export const query = graphql`
  query CategoryQuery {
    allContentfulCategory(filter: { node_locale: { eq: "it" } }, limit: 6) {
      edges {
        node {
          id
          node_locale
          description
          name
          #
          # Add this
          #
          # theme {
          #   id
          #   lightPrimary
          #   primary
          #   secondary
          #   background
          # }
          article {
            id
            date(formatString: "DD.MM.YY", locale: "it")
            title
            excerpt
            slug
            category {
              name
            }
            author {
              name
              slug
            }
            heroImage {
              id
              gatsbyImageData(
                cropFocus: CENTER
                aspectRatio: 1.5
                layout: CONSTRAINED
              )
              title
            }
          }
        }
      }
    }
  }
`;
