import React from 'react';
import Layout from '@layout';
import theme from '@theme';
import Container from '@commons/container';
import SunLogo from '@components/rising-sun';
import Spacer from '@components/spacer';
import BigParagraph from '@components/big-paragraph';

import Hero from '@widgets/hero';

const HomePage = () => {
  const HomePageTheme = {
    ...theme,
    colors: {
      primary: 'rgba(187, 8, 8, 1)',
      lightPrimary: 'rgba(187, 8, 8, .3)',
      background: '#e9ede1'
    },
  };

  return (
    <Layout theme={HomePageTheme}>
      <Container>
        <Hero />
      </Container>
      <Spacer space={12} />
      <Container>
        <SunLogo />
      </Container>
      <Spacer space={12} />
      <Container>
        <BigParagraph>
          Quello che hai sempre cercato non è mai stato fuori di te, ma lo hai
          nascosto dentro di te. Se ancora non lo hai trovato è perché quel
          percorso lo si cammina al contrario e lo si fa con il perdono.
        </BigParagraph>
      </Container>
      <Spacer space={24} line star />
      <Container>
        <BigParagraph>
          <span className='aside'>Cosa Facciamo</span> A Inmost promuoviamo gli
          insegnamenti di <span className='bold'>Un Corso in Miracoli</span>.
          Offriamo percorsi individuali dedicati all'esperienza e
          all'applicazione del perdono come principale strumento di
          trasformazione ed evoluzione personale.
        </BigParagraph>
      </Container>
      <Spacer space={24} />
    </Layout>
  );
};

export default HomePage;
