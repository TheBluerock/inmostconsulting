import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import Container from '@commons/container';
import MarginController from '@commons/margin-controller';
import BlogParagraph from '@components/blog-paragraph';
import BlogHeading from '@components/blog-heading';
import Link from '@components/link';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Spacer from '@components/spacer';
import Text from '@commons/text';
import { useAppContext } from '@helpers/app-context';
import { motion } from 'framer-motion';
import { useTheme } from '@emotion/react';
import StarCircle from '@components/star-circle';
import About from '@components/about';



const AuthorPage = ({ data  }) => {
  const { bio, name, image, description } = data.contentfulAuthor;
  const { setColorTheme } = useAppContext();
  const theme = useTheme();
  const scrollRef = useRef(null)

  React.useEffect(() => {
    setColorTheme({
      background: 'rgba( 233, 237, 225, .9)',
      lightPrimary: 'rgba(8, 8, 8, .2)',
      secondary: 'rgba(0, 0, 0, .9)',
      primary: 'rgba(187, 8, 8, .9)',
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
      fontSize={theme.typography.h4}
      fontFamily={'serif'}
      color={props.color}
      textTransform={"uppercase"}
    >
      {children}
    </Text>
  );

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => (
        <Bold color={theme.colors.primary}>{text}</Bold>
      ),
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
        console.log(node);
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
            fontSize={theme.typography.h2}
            fontWeight={400}
            textTransform={'uppercase'}
            color={theme.colors.secondary}
            align={"center"}
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
        //const words = children[0].split(/(\s+)/);
        return (
        
            <Text
              ref={scrollRef}
              //paragraph={words}
              fontSize={ theme.typography.h4 }
              fontFamily={"serif"}
              textTransform={"uppercase"}
              lineHeight={1.1}
              color={ theme.colors.secondary }
              style={{ textIndent: "4em"}}
            >
              { children}
            </Text>
              
        
      )
    },
    }
  }

  const authorImage = getImage(image);

  return (
    <motion.div
      initial={{ opacity: 0, y: "500px" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.75,
      }}>
    <Spacer line space={4} />
    <MarginController>
      <About color={ theme.colors.primary }/>
    </MarginController>
    <Spacer space={4}/>
        <Spacer space={2} />
        <MarginController ref={scrollRef}>
        { renderRichText(description, optionsDescription) }
        </MarginController>
      <Spacer space={6} line />
      <Container width='55vw' align={'center'}>
        <GatsbyImage image={authorImage} alt={name} />
      </Container>
      <Spacer space={6} />
      <Container align={'center'}>
      <StarCircle />
      </Container>
      <Spacer space={4} />
      <Container width='55vw' align={'center'}>
        <Text 
          fontSize={theme.typography.h5}
          fontWeight={400}
          fontFamily={'serif'}
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
          cornerRadius: 24
        )
        width
        title
      }
      node_locale
    }
  }
`;

export const Head = ({ data }) => {
  const {
    node_locale,
    name,
    shortBio,
    date,
    createdAt,
    updatedAt,
    image,
    bio,
    slug,
    author,
  } = data.contentfulAuthor;

  const authorUrl = `https://inmostconsulting.com/about/${slug}`;

  const authorSchema = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": name,
    "url": authorUrl,
    "image": "URL of the author's image",
    "description": shortBio,
    "jobTitle": "Author or relevant job title",
    "worksFor": {
      "@type": "Organization",
      "name": "Inmost Consulting®"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Educational Institution Name"
    },
    "birthDate": "1977",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Piazza Del Carroccio 5",
      "addressLocality": "Legnano",
      "addressRegion": "Milano",
      "postalCode": "20025",
      "addressCountry": "Italia"
    },
    "sameAs": [
      "URLs of author's social media profiles"
    ]
  }

  return (
    <>
      <html lang={node_locale} />
      <title>{`About ${name}`}</title>
      <link rel='canonical' href={authorUrl} />
      <meta name='description' content={shortBio} />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
      <meta name='author' content='Your Name' />
      <meta property='og:title' content={name} />
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
