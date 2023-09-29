import React from 'react';
import Layout from '@layout';
import theme from '@theme';

const ContattiPage = () => {
  const ContactsPageTheme = {
    ...theme,
    colors: {
      primary: '#426427',
      background: '#e9ede1',
    },
  };

  return <Layout theme={ContactsPageTheme}></Layout>;
};

export default ContattiPage;
