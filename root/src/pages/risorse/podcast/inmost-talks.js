import React, { useLayoutEffect } from 'react';
import TalksTitle from '@components/talks';
import { graphql } from 'gatsby';
import { useTheme } from '@emotion/react';
import { motion } from 'framer-motion';
import Spacer from '@components/spacer';
import MarginController from '@commons/margin-controller';
import { useAppContext } from '@helpers/app-context';
import TitleMarquee from '@components/marquee-title';

const PodcastPage = ({ data }) => {
  const { setColorTheme } = useAppContext();
  const theme = useTheme();

  const { description } = data.contentfulWebpage;

  React.useEffect(() => {
    setColorTheme({
      background: 'rgba(30,215,96, 1)',
      lightPrimary: 'rgba(255, 255, 255, 0.95)',
      secondary: 'rgba(187, 8, 8, .9)',
      primary: 'rgba(0, 0, 0, .8)',
    });
  }, []);

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
      </MarginController>
      <TitleMarquee text={description} />
      <Spacer line star space={6} />
      {}
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

const Head = ({ data }) => {
  const { node_locale, title, description, slug, HeroImage } =
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
        url: HeroImage.url,
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
      <meta charset='UTF-8' />
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
      <meta property='og:image' content={HeroImage.url} />
      <meta name='twitter:card' content={description} />
      <meta name='twitter:site' content='@matteoinmost' />
      <meta name='robots' content='index, follow' />
      <meta name='HandheldFriendly' content='true' />
    </>
  );
};
