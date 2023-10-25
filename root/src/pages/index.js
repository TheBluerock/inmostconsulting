import React from 'react';
import Layout from '@layout';
import theme from '@theme';
import HeroItem from '@components/hero-item';

const text = ['First Line', 'Second Line', 'Third Line'];

const HomePage = () => {
  let HomePageTheme = {
    ...theme,
    colors: {
      primary: 'rgba(187, 8, 8, 1)',
      lightPrimary: 'rgba(187, 8, 8, .2)',
      background: '#e9ede1',
    },
  };

  return (
    <Layout theme={HomePageTheme}>
      <HeroItem text={text} />
    </Layout>
  );
};

export default HomePage;
