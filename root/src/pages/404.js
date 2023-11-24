import React, { useEffect } from 'react';
import NotFound from '@components/not-found';

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useAppContext } from '@helpers/app-context';

const NotFoundPage = () => {
  const { setColorTheme } = useAppContext();
  const theme = useTheme();

  React.useEffect(() => {
    setColorTheme({
      background: 'rgba(0, 0, 0, .9)',
      lightPrimary: 'rgba(8, 8, 25, .2)',
      secondary: 'rgba(187, 8, 8, .9)',
      primary: 'rgba(200, 210, 232, .9)',
    });
  }, []);

  return (
    <>
      <NotFound />
    </>
  );
};

export default NotFoundPage;

const MarqueeText = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.h4.desktop};
  font-family: ${({ theme }) => theme.fonts.serif};
  text-transform: uppercase;
  text-decoration: none;
  margin: 24px 12px;
  @media ${({ theme }) => theme.device.large} {
    font-size: ${({ theme }) => theme.typography.h4.tablet};
  }
  @media ${({ theme }) => theme.device.small} {
    font-size: ${({ theme }) => theme.typography.h3.mobile};
  }
`;

const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
`;
