import React from 'react';

//Gatsby internal apis
import { graphql } from 'gatsby';

//3rd Party Libraries
import { useTheme } from '@emotion/react';
import { motion } from 'framer-motion';

//App Context
import { useAppContext } from '@helpers/app-context';

//Components
import Spacer from '@components/spacer';
import MarginController from '@commons/margin-controller';
import ArticlesTitle from '@components/articoli';
import ArticleCategory from '@components/article-category';

const ArticlePage = ({ data }) => {
  const theme = useTheme();
  const categories = data.allContentfulCategory.edges;
  const { setColorTheme } = useAppContext();

  React.useEffect(() => {
    setColorTheme({
      background: 'rgba(177, 211, 232, .9)',
      lightPrimary: 'rgba(255, 255, 255, .2)',
      primary: 'rgba(18, 25, 18, .9)',
      secondary: 'rgba(187, 8, 8, .9)',
    });
  }, []);

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

// // To Test

// // export const query = graphql`
// #   query ArticlesByCategory {
// #     allContentfulCategory(filter: { node_locale: { eq: "it" } }) {
// #       nodes {
// #         id
// #         name
// #         articles: article(limit: 6) {
// #           id
// #           date(formatString: "DD.MM.YY", locale: "it")
// #           title
// #           excerpt
// #           slug
// #           category {
// #             name
// #           }
// #           author {
// #             name
// #             slug
// #           }
// #           heroImage {
// #             id
// #             gatsbyImageData(
// #               cropFocus: CENTER
// #               aspectRatio: 1.5
// #               layout: CONSTRAINED
// #             )
// #             title
// #           }
// #         }
// #       }
// #     }
// #   }
// # `;
