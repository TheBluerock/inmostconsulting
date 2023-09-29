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
          description={"Lorem Ipsum dolor sit amet"}
          icon={<AsteriskIcon />}
        />
        <FooterBox
          title={"Articoli"}
          description={"Lorem Ipsum dolor sit amet"}
          icon={<LayersIcon />}
        />
      </InnerWrapper>
      <InnerWrapper>
        <FooterBox
          title={"Talks"}
          description={"Lorem Ipsum dolor sit amet"}
          icon={<StereoIcon />}
        />
        <FooterBox
          title={"Learn"}
          description={"Lorem Ipsum dolor sit amet"}
          icon={<AtomIcon />}
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
