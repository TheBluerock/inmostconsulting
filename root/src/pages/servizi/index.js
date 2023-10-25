import React from 'react';
import Layout from '@layout';
import theme from '@theme';

const ServiziPage = () => {
  const ArticlesPageTheme = {
    ...theme,
    colors: {
      primary: '#ffbbbc',
      lightPrimary: 'rgba(255, 187, 188, .3)',
      background: '#013b2f',
    },
  };

  return <Layout theme={ArticlesPageTheme}></Layout>;
};

export default ServiziPage;
