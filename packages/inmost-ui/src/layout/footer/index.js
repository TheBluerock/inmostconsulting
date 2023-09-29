import React from "react";
import styled from "@emotion/styled";
import Container from "@commons/container";
import SvgLogo from "@components/svg-logo";
import Spacer from "@components/spacer";
import FooterBoxWrapper from "@layout/footer-box-wrapper";
import QuickLinks from "@layout/quick-links";
import FooterMarquee from "../footer-marquee";
import FooterMailchimp from "../footer-mailchimp";
import FooterLast from "../footer-last";
import { graphql, useStaticQuery } from "gatsby";

const FooterStc = styled.footer``;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query quickLinksQuery {
      allContentfulWebsiteConfig {
        edges {
          node {
            quickLinks {
              socials {
                id
                link
                text
              }
              links {
                id
                link
                text
              }
            }
          }
        }
      }
    }
  `);

  const quickLinksData =
    data.allContentfulWebsiteConfig.edges[0].node.quickLinks;
  // Access socials and links
  const socials = quickLinksData.socials;
  const links = quickLinksData.links;

  return (
    <FooterStc>
      <FooterMarquee />
      <Spacer line />
      <Container>
        <SvgLogo />
      </Container>
      <Spacer line />
      <FooterBoxWrapper />
      <QuickLinks links={socials} />
      <FooterMailchimp />
      <QuickLinks links={links} />
      <FooterLast />
    </FooterStc>
  );
};

export default Footer;
