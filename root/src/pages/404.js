import React from 'react';
import theme from '@theme';
import Layout from '@layout';
import NotFound from '@components/not-found';

const NotFoundPage = () => {
  const NotFoundPageTheme = {
    ...theme,
    colors: {
      primary: 'rgba(255, 255, 255, .9)',
      background: '#111111',
    },
  };

  return (
    <Layout theme={NotFoundPageTheme}>
      <NotFound />
    </Layout>
  );
};

export default NotFoundPage;
