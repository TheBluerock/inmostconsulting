import React, { useEffect } from 'react';
import { useAppContext } from '@helpers/app-context';
import NotFound from '@components/not-found';

const NotFoundPage = () => {
  const { setColorTheme } = useAppContext();

  useEffect(() => {
    setColorTheme({
      primary: 'rgba(255, 255, 240, .9)',
      background: 'rgba( 12, 12, 12, .9)',
    });
  }, []);

  return <NotFound />;
};

export default NotFoundPage;
