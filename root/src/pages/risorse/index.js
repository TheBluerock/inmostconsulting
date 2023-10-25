import React from 'react';
import Layout from '@layout';
import theme from '@theme';

const ResourcesPage = () => {
  const ResourcesPageTheme = {
    ...theme,
    colors: {
      primary: '#1ba14a',
      lightPrimary: 'rgba(0, 0, 0, .32)',
      background: '#e9ede1',
    },
  };

  return <Layout theme={ResourcesPageTheme}></Layout>;
};

export default ResourcesPage;
