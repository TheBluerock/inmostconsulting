import React from 'react';
import Layout from '@layout';
import theme from '@theme';

const ServiziPage = () => {
  const ArticlesPageTheme = {
    ...theme,
    colors: {
      primary: '#34488E',
      background: '#e9ede1',
    },
  };

  return <Layout theme={ArticlesPageTheme}></Layout>;
};

export default ServiziPage;
