import React, { useEffect } from 'react';
import { useAppContext } from '@helpers/app-context';
import NotFound from '@components/not-found';
import TitleMarquee from '@components/marquee-title';
import { useTheme } from '@emotion/react';

const NotFoundPage = () => {
  const theme = useTheme();
  const { setColorTheme } = useAppContext();

  useEffect(() => {
    setColorTheme({
      primary: 'rgba(255, 255, 240, .9)',
      background: 'rgba( 4, 4, 4, .9)',
    });
  }, []);

  return (
    <>
      <TitleMarquee text={'Qui non vi è nulla'} size={theme.typography.h4} />
      <NotFound />
    </>
  );
};

export default NotFoundPage;
