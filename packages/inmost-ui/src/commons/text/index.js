import React from 'react';
import { css, useTheme } from '@emotion/react';

const Text = ({ as: Tag = 'span', children, size, fonttype, center, uppercase, ...props }) => {
  const theme = useTheme();

  // Determine the font family based on the fontType prop
  const getFontFamily = () => {
    switch (fonttype) {
      case 'serif':
        return theme.fonts.serif;
      case 'slant':
        return theme.fonts.slant;
      case 'sans':
      default:
        return theme.fonts.sans;
    }
  };

  const commonStyles = {
    color: theme.colors.primary,
    fontWeight: 400,
    fontFamily: getFontFamily(),
    fontStyle: 'normal',
    lineHeight: '1em',
    textTransform: uppercase && "uppercase",
    textAlign: center && 'center',
    margin: `0 0 ${({ bottom }) => (bottom ? bottom * 8 + 'px' : 0)} 0`,
  };

  const responsiveStyles = css`
    ${commonStyles};

    /* Responsive font size adjustments */
    font-size: ${size ? `${size}px` : 'inherit'};

    @media screen and (max-width: 768px) {
      font-size: ${size ? `${size * 0.9}px` : 'inherit'};
    }

    @media screen and (max-width: 480px) {
      font-size: ${size ? `${size * 0.8}px` : 'inherit'};
    }
  `;

  return (
    <Tag css={responsiveStyles} {...props}>
      {children}
    </Tag>
  );
};

export default Text;
