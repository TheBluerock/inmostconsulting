import React from 'react';
import Layout from '@layout';
import theme from '@theme';

const ContattiPage = () => {
  const ContactsPageTheme = {
    ...theme,
    colors: {
      primary: 'rgba(227, 227, 255, .75)',
      background: '#242222',
    },
  };

  return <Layout theme={ContactsPageTheme}></Layout>;
};

export default ContattiPage;
