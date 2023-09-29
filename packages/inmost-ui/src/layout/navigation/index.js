import React from "react";
import styled from "@emotion/styled";
import NavLink from "@layout/nav-link";
import Logo from "@layout/logo";
import { useStaticQuery, graphql } from "gatsby";
import { useAppContext } from "@helpers/app-context";

const OuterWrapper = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;

  @media ${({ theme }) => theme.device.medium} {
    justify-content: flex-start;
  }
  @media ${({ theme }) => theme.device.small} {
    justify-content: flex-start;
  }
`;

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query LinksQuery {
      site {
        siteMetadata {
          links {
            name
            slug
          }
          cta {
            title
            name
            link
          }
        }
      }
    }
  `);

  const { isDevice } = useAppContext();

  const { links, cta } = data.site.siteMetadata;

  React.useEffect(() => {
    console.log(data);
  }, []);

  return (
    <OuterWrapper>
      {isDevice === "desktop" ? (
        <DesktopNavigation links={links} />
      ) : (
        <MobileNavigation cta={cta} />
      )}
    </OuterWrapper>
  );
};

export default Navigation;

const DesktopNavigation = ({ links }) => {
  return (
    <>
      {links.map(({ slug, name }, index) => {
        return <NavLink key={index} text={name} url={slug} asterisk />;
      })}
    </>
  );
};

const MobileNavigation = ({ cta }) => {
  return (
    <>
      <Logo />
    </>
  );
};
