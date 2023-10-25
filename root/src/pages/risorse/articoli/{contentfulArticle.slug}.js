import React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '@layout';
import theme from '@theme';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import BlogParagraph from '@components/blog-paragraph';
import BlogHeading from '@components/blog-heading';
import BlogList from '@components/blog-list';
import BlogQuote from '@components/blog-quote';
import BlogListItem from '@components/blog-list-item';
import Txt from '@commons/text';
import Link from '@components/link';
import BlogHead from '@components/blog-head';
import Spacer from '@components/spacer';

//Marks

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
const Text = ({ children }) => <BlogParagraph>{children}</BlogParagraph>;

const ArticlePage = ({ data }) => {
  const ArticlePageTheme = {
    ...theme,
    colors: {
      primary: '#1C2A4E',
      lightPrimary: '#8d94a6',
      secondary: '#BB0808',
      background: '#e9ede1',
    },
  };

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => (
        <Bold color={ArticlePageTheme.colors.secondary}>{text}</Bold>
      ),
      [MARKS.ITALIC]: text => (
        <Italic color={ArticlePageTheme.colors.secondary}>{text}</Italic>
      ),
    },
    renderNode: {
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        return (
          <Link
            to={`/risorse/articoli/${node.data.target.slug}/`}
            text={children}
            color={ArticlePageTheme.colors.secondary}
            underline={true}
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

  const { title, body, excerpt, date } = data.contentfulArticle;
  console.log(data);

  return (
    <Layout theme={ArticlePageTheme}>
      <article>
        <BlogHead
          title={title}
          image={data.contentfulArticle.heroImage.gatsbyImageData}
          alt={data.contentfulArticle.heroImage.description}
          excerpt={excerpt}
          date={date}
        />
        {renderRichText(body, options)}
      </article>
      <Spacer space={8} />
    </Layout>
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
      name: 'Matteo Albini',
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
      date(locale: "it", formatString: "DD MMMM YYYY")
      category {
        name
      }
      body {
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
          formats: [AVIF, WEBP, AUTO]
        )
      }
    }
  }
`;

export default ArticlePage;
