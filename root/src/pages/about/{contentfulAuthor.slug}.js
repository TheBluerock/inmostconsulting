import React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Container from '@commons/container';
import MarginController from '@commons/margin-controller';
import Text from '@commons/text';
import BlogParagraph from '@components/blog-paragraph';
import BlogHeading from '@components/blog-heading';
import Link from '@components/link';
import Spacer from '@components/spacer';
import { useAppContext } from '@helpers/app-context';
import { useTheme } from '@emotion/react';
import StarCircle from '@components/star-circle';
import About from '@components/about';
import TitleMarquee from '@components/marquee-title';

import { motion } from 'framer-motion';

const AuthorPage = ({ data }) => {
  const { id, bio, name, image, description, shortBio } = data.contentfulAuthor;
  const { setColorTheme } = useAppContext();
  const theme = useTheme();

  React.useEffect(() => {
    setColorTheme({
      background: 'rgba(255,245,226, .9)',
      lightPrimary: 'rgba(8, 8, 25, .2)',
      secondary: 'rgba(187, 8, 8, .9)',
      primary: 'rgba(18, 30, 40, .9)',
    });
  }, []);

  const Bold = ({ children, ...props }) => (
    <Text
      as={'span'}
      fontWeight={400}
      fontSize={theme.typography.p}
      fontFamily={'serif'}
      color={props.color}
    >
      {children}
    </Text>
  );
  const Italic = ({ children, ...props }) => (
    <Text
      as={'span'}
      fontWeight={400}
      fontSize={theme.typography.h5}
      fontFamily={'serif'}
      color={props.color}
      textTransform={'uppercase'}
    >
      {children}
    </Text>
  );

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold color={theme.colors.primary}>{text}</Bold>,
      [MARKS.ITALIC]: text => (
        <Italic color={theme.colors.primary}>{text}</Italic>
      ),
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <Link
            to={node.data.uri}
            text={children}
            color={theme.colors.secondary}
            underline
            serif
          />
        );
      },
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        return (
          <Link
            to={`/risorse/articoli/${node.data.target.slug}/`}
            text={children}
            color={theme.colors.secondary}
            underline
            serif
          />
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <>
          <BlogParagraph>{children}</BlogParagraph>
          <Spacer space={2} />
        </>
      ),

      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <BlogHeading
            as={'h2'}
            fontSize={theme.typography.h3}
            fontWeight={400}
            textTransform={'uppercase'}
            color={theme.colors.secondary}
            align={'center'}
            serif
          >
            {children}
          </BlogHeading>
        );
      },

      [BLOCKS.HEADING_3]: (node, children) => {
        return (
          <BlogHeading as={'h3'} fontSize={theme.typography.h3} serif>
            {children}
          </BlogHeading>
        );
      },
    },
  };

  const optionsDescription = {
    renderMark: {
      [MARKS.ITALIC]: text => (
        <Italic color={theme.colors.primary}>{text}</Italic>
      ),
    },

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {

        return (
          <Text
            as={"p"}
            fontSize={theme.typography.h5}
            fontFamily={'serif'}
            textTransform={'uppercase'}
            lineHeight={1.25}
            color={theme.colors.primary}
            style={{ textIndent: '30%' }}
          >
            {children}
          </Text>
        );
      },
    },
  };

  const authorImage = getImage(image);

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: '500px' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-500px' }}
      transition={{
        duration: 0.75,
      }}
    >
      <Spacer line space={4} />
      <MarginController>
        <About color={theme.colors.primary} />
      </MarginController>
      <Spacer space={2} />
      <TitleMarquee text={shortBio} />
      <Spacer space={4} />
      <Container width='55vw' align={'center'}>
        <GatsbyImage image={authorImage} alt={name} />
      </Container>
      <Spacer space={4} />
      <Container width={'65vw'}>
        {renderRichText(description, optionsDescription)}
      </Container>
      <Spacer space={6} />
      <Container align={'center'}>
        <StarCircle />
      </Container>
      <Spacer space={4} />
      <Container width='55vw' align={'center'}>
        <Text
          fontSize={theme.typography.h5}
          fontWeight={600}
          fontFamily={'sans'}
        >
          {name}
        </Text>
      </Container>
      <Spacer space={4} />
      {renderRichText(bio, options)}
      <Spacer space={6} />
    </motion.div>
  );
};

export default AuthorPage;

export const query = graphql`
  query AuthorQuery($id: String) {
    contentfulAuthor(id: { eq: $id }) {
      id
      bio {
        raw
        references {
          ... on ContentfulArticle {
            id
            contentful_id
            __typename
            slug
            title
          }
        }
      }
      slug
      shortBio
      description {
        raw
      }
      name
      socials {
        name
        profile
      }
      image {
        url
        gatsbyImageData(
          aspectRatio: 1
          layout: CONSTRAINED
          placeholder: BLURRED
          quality: 50
          resizingBehavior: CROP
          width: 480
          formats: [WEBP, AUTO]
        )
        width
        title
      }
      node_locale
    }
  }
`;

export const Head = ({ data }) => {
  const { node_locale, name, shortBio, image, slug } = data.contentfulAuthor;

  const authorUrl = `https://inmostconsulting.com/about/${slug}`;

  const authorSchema = {
    '@context': 'http://schema.org',
    '@type': 'Person',
    name: name,
    url: authorUrl,
    image: image.url,
    description: shortBio,
    worksFor: {
      '@type': 'Organization',
      name: 'Inmost Consulting®',
    },
    birthDate: '1977',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Piazza Del Carroccio 5',
      addressLocality: 'Legnano',
      addressRegion: 'Milano',
      postalCode: '20025',
      addressCountry: 'Italia',
    },
  };

  return (
    <>
      <html lang={node_locale} />
      <title>{`${name}: ${shortBio}`}</title>
      <link rel='canonical' href={authorUrl} />
      <meta name='description' content={shortBio} />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
      <meta name='author' content='Your Name' />
      <meta property='og:title' content={`about ${name}`} />
      <meta property='og:description' content={shortBio} />
      <meta property='og:image' content={image.url} />
      <meta name='twitter:card' content={shortBio} />
      <meta name='twitter:site' content='@matteoinmost' />
      <meta name='robots' content='index, follow' />
      <meta name='HandheldFriendly' content='true' />
      <script type='application/ld+json'>
        {JSON.stringify(authorSchema, null, 2)}
      </script>
    </>
  );
};
