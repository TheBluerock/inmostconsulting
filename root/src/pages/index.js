import React from 'react';
import { graphql } from 'gatsby';
import { useAppContext } from '@helpers/app-context';
import HomeHero from '@components/home-hero';

const HomePage = ({ data }) => {
  const { setColorTheme } = useAppContext();

  React.useEffect(() => {
    setColorTheme({
      background: 'rgba(233,237,225, .9)',
      lightPrimary: 'rgba(8, 8, 25, .2)',
      secondary: 'rgba(187, 8, 8, .9)',
      primary: 'rgba(197, 08, 08, .9)',
    });
  }, []);

  return (
    <>
      <HomeHero style={{ height: 1000, width: 1000 }} />
    </>
  );
};

export default HomePage;

//export const query = graphql``

export const Head = () => {
  return <></>;
};
