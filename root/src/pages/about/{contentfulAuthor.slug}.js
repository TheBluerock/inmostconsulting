import React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import Layout from '@layout';
import theme from '@theme';
import Container from '@commons/container';
import BlogParagraph from '@components/blog-paragraph';
import BlogHeading from '@components/blog-heading';
import { GatsbyImage } from 'gatsby-plugin-image';
import Spacer from '@components/spacer';
import Text from '@commons/text';

const AuthorPage = ({ data }) => {
  const { bio, name, shortBio } = data.contentfulAuthor;

  const authorTheme = {
    ...theme,
    colors: {
      primary: 'rgba(255, 255, 255, .6)',
      background: 'rgba(0, 12, 55, .9)',
    },
  };

  return (
    <Layout theme={authorTheme}>
      <Container width='55vw' align={'center'}>
        <GatsbyImage image={data.contentfulAuthor.image.gatsbyImageData} alt={name} />
      </Container>
      <Spacer space={6} />
      <Container width='55vw' align={'center'}>
      <Text fontSize={theme.typography.h5 } fontWeight={400} fontFamily={"slant"}>{ shortBio }</Text>
      </Container>
      <Spacer space={6} />
      {renderRichText(bio, options)}
      <Spacer space={12} />
    </Layout>
  );
};

export default AuthorPage;

const options = {
  renderNode: {

    [BLOCKS.PARAGRAPH]: (node, children) => (
      <>
      <BlogParagraph>{children}</BlogParagraph>
      <Spacer space={4} />
      </>
    ),

    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <BlogHeading
          as={'h2'}
          fontSize={theme.typography.h4}
          fontWeight={400}
          textTransform={'uppercase'}
        >
          {children}
        </BlogHeading>
      );
    },

    [BLOCKS.HEADING_3]: (node, children) => {
      return (
        <BlogHeading as={'h2'} fontSize={theme.typography.h3}>
          {children}
        </BlogHeading>
      );
    },
  },
};

export const query = graphql`
  query AuthorQuery($id: String) {
    contentfulAuthor(id: { eq: $id }) {
      bio {
        raw
      }
      slug
      shortBio
      name
      socials {
        name
        profile
      }
      image {
        gatsbyImageData(
          aspectRatio: 1
          layout: CONSTRAINED
          placeholder: BLURRED
          quality: 50
          resizingBehavior: CROP
          width: 480
          formats: AVIF
          cornerRadius: 500
        )
        width
        title
      }
      node_locale
    }
  }
`;
