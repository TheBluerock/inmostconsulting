import React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { useTheme } from '@emotion/react';
import BlogParagraph from '@components/blog-paragraph';
import BlogHeading from '@components/blog-heading';
import BlogList from '@components/blog-list';
import BlogListItem from '@components/blog-list-item';
import BlogQuote from '@components/blog-quote';
import Txt from '@commons/text';
import Link from '@components/link';
import BlogHead from '@components/blog-head';
import Spacer from '@components/spacer';
import { useAppContext } from '@helpers/app-context';

//Marks
//React-Share
//Partialy active
//Related Articles
//Quotes
//Linked Articles Over
//Related Services
//Tags and related Therms

const ArticlePage = ({ data }) => {
  const theme = useTheme();

  const { setColorTheme } = useAppContext();

  
  React.useEffect(() => {
    const colors = {
      primary: 'rgba(8, 10, 12, .8)',
      lightPrimary: 'rgba(187, 8, 8, .2)',
      secondary: '#1C2A4E',
      background: '#e9ede1',
    };
    setColorTheme(colors)
  },[])

  const Text = ({ children }) => <BlogParagraph>{children}</BlogParagraph>;

  const Bold = ({ children, ...props }) => (
    <Txt
      as={'span'}
      fontWeight={400}
      fontSize={theme.typography.p}
      fontFamily={'serif'}
      color={props.color}
    >
      {children}
    </Txt>
  );

  const Italic = ({ children, ...props }) => (
    <Txt
      as={'span'}
      fontWeight={400}
      fontSize={theme.typography.p}
      fontFamily={'slant'}
      color={props.color}
    >
      {children}
    </Txt>
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
            color={theme.colors.primary}
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
            color={theme.colors.primary}
            underline
            serif
          />
        );
      },

      [BLOCKS.QUOTE]: (node, children) => <BlogQuote>{children}</BlogQuote>,

      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,

      [BLOCKS.UL_LIST]: (node, children) => <BlogList>{children}</BlogList>,

      [BLOCKS.LIST_ITEM]: (node, children) => (
        <BlogListItem>{children}</BlogListItem>
      ),

      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <BlogHeading as={'h2'} fontSize={theme.typography.h3} serif>
            {children}
          </BlogHeading>
        );
      },

      [BLOCKS.HEADING_3]: (node, children) => {
        return (
          <BlogHeading
            as={'h3'}
            fontSize={theme.typography.h4}
            textTransform={'uppercase'}
            fontWeight={300}
          >
            {children}
          </BlogHeading>
        );
      },

      [BLOCKS.HEADING_4]: (node, children) => {
        return (
          <BlogHeading as={'h4'} fontSize={theme.typography.h4}>
            {children}
          </BlogHeading>
        );
      },
    },
  };

  const { title, body, excerpt, date, author, category } =
    data.contentfulArticle;

  return (
    <>
      <article>
        <BlogHead
          title={title}
          image={data.contentfulArticle.heroImage.gatsbyImageData}
          alt={data.contentfulArticle.heroImage.description}
          excerpt={excerpt}
          date={date}
          author={author}
          category={category}
        />
        <Spacer space={4} />
        {renderRichText(body, options)}
      </article>
      <Spacer space={8} />
    </>
  );
};

export const Head = ({ data }) => {
  const {
    node_locale,
    title,
    excerpt,
    date,
    createdAt,
    updatedAt,
    heroImage,
    slug,
    author,
  } = data.contentfulArticle;

  const articleUrl = `https://inmostconsulting.com/risorse/articoli/${slug}`;

  const articleSchema = {
    '@context': 'http://schema.org',
    '@type': 'Article',
    articleSection: data.contentfulArticle.category.name,
    headline: title,
    about: excerpt,
    author: {
      '@type': 'Person',
      name: author.name,
    },
    dateCreated: createdAt,
    dateModified: updatedAt,
    datePublished: date,
    isAccessibleForFree: true,
    image: {
      '@type': 'ImageObject',
      url: heroImage.url,
      width: heroImage.width,
      height: heroImage.height,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Immost Consulting',
      logo: {
        '@type': 'ImageObject',
        url: 'URL to Organization Logo',
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    keywords: [],
  };

  return (
    <>
      <html lang={node_locale} />
      <title>{title}</title>
      <link rel='canonical' href={articleUrl} />
      <meta name='description' content={excerpt} />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
      <meta name='author' content='Your Name' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={excerpt} />
      <meta property='og:image' content={heroImage.url} />
      <meta name='twitter:card' content={excerpt} />
      <meta name='twitter:site' content='@matteoinmost' />
      <meta name='robots' content='index, follow' />
      <meta name='HandheldFriendly' content='true' />
      <script type='application/ld+json'>
        {JSON.stringify(articleSchema, null, 2)}
      </script>
    </>
  );
};

export const query = graphql`
  query ArticleQuery($id: String) {
    contentfulArticle(id: { eq: $id }) {
      id
      contentful_id
      slug
      title
      node_locale
      excerpt
      createdAt
      updatedAt

      date(locale: "it", formatString: "DD.MM.YYYY")

      category {
        name
        theme {
          id
          lightPrimary
          primary
          secondary
          background
        }
      }

      body {
        raw

        # references {
        #   ... on ContentfulArticle {
        #     id
        #     contentful_id
        #     __typename
        #     slug
        #     title
        #   }

        #   #     ... on ContentfulAsset {
        #   #       id
        #   #       contentful_id
        #   #       __typename
        #   #       gatsbyImageData
        #   #       title
        #   #     }
        # }
      }

      author {
        shortBio
        name
        slug
        bio {
          raw
        }
      }

      heroImage {
        title
        description
        url
        height
        width
        gatsbyImageData(
          layout: CONSTRAINED
          aspectRatio: 2
          placeholder: BLURRED
          formats: [WEBP, AUTO]
        )
      }
    }
  }
`;

export default ArticlePage;
