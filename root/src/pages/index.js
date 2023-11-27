import React from 'react';
import { useAppContext } from '@helpers/app-context';
import HomeHero from '@components/home-hero';

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

  return (
    <>
      <HomeHero style={{ height: 1000, width: 1000 }} />
    </>
  );
};

export default HomePage;

//export const query = graphql``

// export const Head = ({ data }) => {
//   const {
//     node_locale,
//     title,
//     description,
//     slug,
//     heroImage,
//     createdAt,
//     updatedAt,
//   } = data.contentfulWebpage;

//   const pageUrl = `https://inmostconsulting.com/risorse/podcast/${slug}`;

//   const pageSchema = {
//     '@context': 'https://schema.org',
//     '@type': 'WebPage',
//     name: title,
//     description: description,
//     url: pageUrl,
//     dateCreated: createdAt,
//     dateModified: updatedAt,
//     datePublished: createdAt,
//     publisher: {
//       '@type': 'Organization',
//       name: 'Inmost Consulting®',
//       logo: {
//         '@type': 'ImageObject',
//         url: heroImage.url,
//         width: 512,
//         height: 512,
//       },
//     },
//     mainEntityOfPage: {
//       '@type': 'WebPage',
//       '@id': 'https://www.inmostconsulting.com',
//     },
//   };

//   return (
//     <>
//       <html lang={node_locale} />
//       <meta charSet='UTF-8' />
//       <title>{title}</title>
//       <meta name='viewport' content='width=device-width, initial-scale=1.0' />
//       <script type='application/ld+json'>
//         {JSON.stringify(pageSchema, null, 2)}
//       </script>
//       <title>{title}</title>
//       <link rel='canonical' href={pageUrl} />
//       <meta name='description' content={description} />
//       <meta
//         name='viewport'
//         content='width=device-width, initial-scale=1, shrink-to-fit=no'
//       />
//       <meta name='author' content='Matteo Albini' />
//       <meta property='og:title' content={title} />
//       <meta property='og:description' content={description} />
//       <meta property='og:image' content={heroImage.url} />
//       <meta name='twitter:card' content={description} />
//       <meta name='twitter:site' content='@matteoinmost' />
//       <meta name='robots' content='index, follow' />
//       <meta name='HandheldFriendly' content='true' />
//     </>
//   );
// };
