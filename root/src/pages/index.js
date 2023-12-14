import React from 'react';
import { useAppContext } from '@helpers/app-context';
import AnimatedTitle from '@components/animated-title';
import MarginController from '@commons/margin-controller';
import Spacer from '@components/spacer';
import { graphql } from 'gatsby';
import BigParagraph from '@components/big-paragraph';
import HeroImage from '@components/hero-image';
import AnimatedMarquee from '@components/animated-marquee';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import InmostTitle from '@components/home-title';

const HomePage = ({ data }) => {
  const { setColorTheme } = useAppContext();

  React.useEffect(() => {
    setColorTheme({
      background: 'rgba(233,237,225, .9)',
      lightPrimary: 'rgba(8, 8, 25, .2)',
      secondary: 'rgba(187, 8, 8, .9)',
      primary: 'rgba(187, 08, 08, .9)',
    });

  }, []);

  const id = data.contentfulWebpage;

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: '500px' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-500px' }}
      transition={{
        duration: 0.75,
      }}
      style={{
        overflow: "hidden"
      }}
    >
      <Spacer space={4} line/>
      <MarginController>
        <InmostTitle />
      </MarginController>
      <Spacer space={4} line/>
      <MarginController>
        <AnimatedTitle
          text={'A chi cerca pace,'}
          />
      </MarginController>
      <Spacer space={ 1 } /> 
      <MarginController>
        <HeroImage />
      </MarginController>
      <MarginController>
        <Spacer space={ 4 }/> 
        <AnimatedTitle
          text={'mostro la via del perdono.'}
        />
      </MarginController>
      <Spacer space={ 6 } /> 
      <BigParagraph indent uppercase>
        Sul percorso di <span className="bold">cambiamento</span>, sentiamo spesso parlare di mente subcosciente, mindset e abitudini,  Esistesse un altra prospettiva a cui guardare alle cose? E se Dietro ad ogni difficoltà percepita ci fosse una <span className='bold'>lezione di perdono</span> da imparare?
      </BigParagraph>
      <Spacer space={6} />
      <AnimatedMarquee 
        title={"Servizi •"} 
        subtitle={"Il perdono offre qualsiasi cosa tu stia cercando •"} 
      />
      <Spacer space={16} star/>
      <BigParagraph sans>
        <span className='aside'>
          Percorsi
        </span>
        A Inmost offriamo percorsi di consapevolezza in cui fare esperienza diretta del <span className='bold'>perdono</span> come principale strumento di evoluzione personale.
      </BigParagraph>
      <MarginController>
        <StaticImage src="../images/astronaut.webp" style={{ borderRadius: "100% "}}/>
      </MarginController>
      <Spacer space={16} star />
      <BigParagraph sans>
        <span className='aside'>
          Divulgazione
        </span>
        Creiamo percorsi fomativi e materiale divulgativo su temi quali perdono e non dualità e promuovendo gli insegnamenti di <span className='bold'>Un Corso in Miracoli</span>. Miriamo ad accrescere consapevolezza in ogni individuo.
      </BigParagraph>
      <Spacer space={4} />
    </motion.div>
  );
};

export default HomePage;

export const query = graphql`
  query PageQuery {
    contentfulWebpage(name: { eq: "Homepage" }, node_locale: { eq: "it" }) {
      id
      contentful_id
      name
      createdAt
      body {
        raw
      }
      heroImage {
        title
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
      description
      node_locale
      title
      updatedAt
      createdAt
    }
  }
`;

export const Head = ({ data }) => {
  const { node_locale, title, description, heroImage, createdAt, updatedAt } =
    data.contentfulWebpage;

  const pageUrl = `https://inmostconsulting.com/`;

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: pageUrl,
    dateCreated: createdAt,
    dateModified: updatedAt,
    datePublished: createdAt,
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
