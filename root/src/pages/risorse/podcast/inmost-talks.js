import React from 'react';
import TalksTitle from '@components/talks';
import { graphql } from 'gatsby';
import { useTheme } from '@emotion/react';
import { motion } from 'framer-motion';
import Spacer from '@components/spacer';
import MarginController from '@commons/margin-controller';
import { useAppContext } from '@helpers/app-context';
import TitleMarquee from '@components/marquee-title';
import Link from '@components/link';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import Text from "@commons/text";
import BlogParagraph from "@components/blog-paragraph";
import BlogHeading from "@components/blog-heading";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import  Container from '@commons/container';

const PodcastPage = ({ data }) => {
  const { setColorTheme } = useAppContext();
  const theme = useTheme();

  const { description, body, heroImage } = data.contentfulWebpage;

  const pageImage = getImage(heroImage);

  React.useEffect(() => {
    setColorTheme({
      background: 'rgba(30,215,96, 1)',
      lightPrimary: 'rgba(255, 255, 255, 0.8)',
      secondary: 'rgba(2, 12, 10, .98)',
      primary: 'rgba(2, 12, 10, .8)',
    });
  }, [setColorTheme]);

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

  return (
    <motion.div
      initial={{ opacity: 0, y: '500px' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.5,
      }}
    >
      <Spacer line space={4} />
      <MarginController>
        <TalksTitle theme={theme} />
      <Spacer space={2} />
      </MarginController>
      <TitleMarquee text={description} />
      <Spacer space={8} />
      <Container width='55vw' align={'center'}>
          <GatsbyImage image={pageImage} alt={heroImage.title} style={{ borderRadius: "240px 240px 0 0"}}/>
      </Container>
       { renderRichText(body, options)} 
    </motion.div>
  );
};

export default PodcastPage;

export const query = graphql`
  query PageQuery {
    contentfulWebpage {
      id
      contentful_id
      createdAt
      body {
        raw
      }
      heroImage {
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
      }
      slug
      description
      node_locale
      title
      updatedAt
    }
  }
`;

export const Head = ({ data }) => {
  const { node_locale, title, description, slug, heroImage } =
    data.contentfulWebpage;

  const pageUrl = `https://inmostconsulting.com/risorse/podcast/${slug}`;

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: pageUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Inmost Consulting®',
      logo: {
        '@type': 'ImageObject',
        url: heroImage.url,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.inmostconsulting.com',
    },
  };

  return (
    <>
      <html lang={node_locale} />
      <meta charSet='UTF-8' />
      <title>{title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <script type='application/ld+json'>
        {JSON.stringify(pageSchema, null, 2)}
      </script>
      <title>{title}</title>
      <link rel='canonical' href={pageUrl} />
      <meta name='description' content={description} />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
      <meta name='author' content='Matteo Albini' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={heroImage.url} />
      <meta name='twitter:card' content={description} />
      <meta name='twitter:site' content='@matteoinmost' />
      <meta name='robots' content='index, follow' />
      <meta name='HandheldFriendly' content='true' />
    </>
  );
};
