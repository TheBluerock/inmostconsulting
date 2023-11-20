import React, { useEffect } from 'react';
import NotFound from '@components/not-found';
import TitleMarquee from '@components/marquee-title';
import { useTheme } from '@emotion/react';

const NotFoundPage = () => {
  const theme = useTheme();

  return (
    <>
      <TitleMarquee text={'Qui non vi è nulla'} size={theme.typography.h4} />
      <NotFound />
    </>
  );
};

export default NotFoundPage;
