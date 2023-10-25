import React from 'react';
import Layout from '@layout';
import theme from '@theme';

const PodcastPage = () => {
  const PodcastPageTheme = {
    ...theme,
    colors: {
      primary: 'rgba(0, 0, 0, .78)',
      lightPrimary: 'rgba(0, 255, 255, .50)',
      background: '#1db954',
    },
  };

  return <Layout theme={PodcastPageTheme}></Layout>;
};

export default PodcastPage;
