import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useTheme, css } from "@emotion/react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const styles = css`
  text-decoration: none;
  font-size: 34px;
  text-transform: uppercase;
`;

const Cta = () => {
  const theme = useTheme();

  const {
    site: {
      siteMetadata: { cta },
    },
  } = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          cta {
            name
            link
          }
        }
      }
    }
  `);

  // Default values to prevent potential errors
  const { name = "", link = "" } = cta || {};

  if (!name || !link) {
    return null;
  }

  return (
    <AniLink
      swipe
      direction="up"
      duration={2}
      css={styles}
      to={link}
      style={{ color: theme.colors.primary }}
    >
      {name}
    </AniLink>
  );
};

export default Cta;
