import React from "react";
import styled from "@emotion/styled";
import AsteriskIcon from "./asterisk-icon";
import LayersIcon from "./layers-icon";
import StereoIcon from "./stereo-icon";
import AtomIcon from "./atom-icon";
import FooterBox from "../footer-box";

const FooterBoxWrapper = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <FooterBox
          title={"Servizi"}
          description={"Come ti posso aiutare"}
          icon={<AsteriskIcon />}
          link={"/servizi/"}
        />
        <FooterBox
          title={"Articoli"}
          description={"Approfondimenti e Saggezza"}
          icon={<LayersIcon />}
          link={"/risorse/articoli/"}
        />
      </InnerWrapper>
      <InnerWrapper>
        <FooterBox
          title={"Talks"}
          description={"Il mio Podcast"}
          icon={<StereoIcon />}
          link={"/risorse/podcast/inmost-talks/"}
        />
        <FooterBox
          title={"Corsi"}
          description={"Il mio corso di preparazione"}
          icon={<AtomIcon />}
          link={"/"}
        />
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default FooterBoxWrapper;

const OuterWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  @media ${({ theme }) => theme.device.medium} {
    flex-direction: column;
    border-bottom: none;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  @media ${({ theme }) => theme.device.small} {
    flex-direction: column;
  }
`;
