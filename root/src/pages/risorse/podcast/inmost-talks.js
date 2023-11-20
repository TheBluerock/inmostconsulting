import React from 'react';
import Layout from '@layout';
import theme from '@theme';
import PageTitle from '@components/page-title';

const PodcastPage = () => {
  const PodcastPageTheme = {
    ...theme,
    colors: {
      primary: 'rgba(0, 0, 0, .9)',
      lightPrimary: 'rgba(0, 0, 0, .25)',
      background: '#1db954',
    },
  };

  return (
    <>
      <PageTitle />
    </>
  );
};

export default PodcastPage;
