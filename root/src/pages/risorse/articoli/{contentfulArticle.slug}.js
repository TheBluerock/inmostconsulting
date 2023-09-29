import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Layout from '@layout';
import theme from '@theme';
import { BLOCKS, MARKS } from '@contentful/rich-text-types'

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const ArticlePage = () => {
    
    const ContactsPageTheme = {
        ...theme,
        colors: {
          primary: '#426427',
          background: '#e9ede1',
        },
      };

      const options = {
        renderMark: {
            [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        },
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
          [BLOCKS.HEADING_2]: (node, children) => {
            return <h2>{children}</h2>
          }
      }}

    const data = useStaticQuery(query);

    return (
        <Layout theme={ ContactsPageTheme } >
            {renderRichText(data.contentfulArticle.body, options)}
        </Layout>
    )
}

export default ArticlePage;

const query = graphql`
    query MyQuery {
        contentfulArticle {
            id
            slug
            title
            body {
                raw
            }
            heroImage {
                gatsbyImageData
            }
        }
    }
`