import React from 'react';
import NotFound from '@components/not-found';
import TitleMarquee from '@components/marquee-title';
import { useAppContext } from '@helpers/app-context';

const NotFoundPage = () => {
  const { setColorTheme } = useAppContext();

  React.useEffect(() => {
    setColorTheme({
      background: 'rgba(0, 0, 0, .9)',
      lightPrimary: 'rgba(8, 8, 25, .2)',
      secondary: 'rgba(187, 8, 8, .9)',
      primary: 'rgba(200, 210, 232, .9)',
    });
  }, [setColorTheme]);

  return (
    <>
      <TitleMarquee text={"Qui non c'è nulla, è solo una illusione"} />
      <NotFound />
    </>
  );
};

export default NotFoundPage;
