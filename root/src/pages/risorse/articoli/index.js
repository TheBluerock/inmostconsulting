import React from 'react';
import Layout from '@layout';
import theme from '@theme';
import { graphql } from 'gatsby';
import ArticleCategory from '@components/article-category';

const ArticlePage = ({ data }) => {
  const ArticlePageTheme = {
    ...theme,
    colors: {
      primary: '#1C2A4E',
      lightPrimary: '#8d94a6',
      secondary: '#BB0808',
      background: '#ede9e9',
    },
  };

  const categories = data.allContentfulCategory.edges;

  return (
    <Layout theme={ArticlePageTheme}>
      {categories.map(({ node }) => {
        if (node.article) {
          return <ArticleCategory key={node.id} category={node} />;
        } else {
          return;
        }
      })}
    </Layout>
  );
};

export default ArticlePage;

export const query = graphql`
  query CategoryQuery {
    allContentfulCategory(filter: { node_locale: { eq: "it" } }, limit: 6 ) {
      edges {
        node {
          id
          node_locale
          description
          name
          theme {
            id
            lightPrimary
            primary
            secondary
            background
          }
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
