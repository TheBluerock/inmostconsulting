import React from "react";
import styled from "@emotion/styled";
import LayersIcon from "@layout/footer-box-wrapper/layers-icon";
import StereoIcon from "@layout/footer-box-wrapper/stereo-icon";
import MenuBox from "@layout/menu-box";
import HomeIcon from "./home-icon";
import EyeIcon from "./eye-icon";

const MenuBoxWrapper = () => {
  return (
    <>
      <OuterWrapper>
        <InnerWrapper>
          <MenuBox
            title={"Home"}
            description={"Dove tutto ha inizio"}
            icon={<HomeIcon />}
            link={"/"}
          />
          <MenuBox
            title={"About"}
            description={"Chi è Matteo?"}
            icon={<EyeIcon />}
            link={"/about/matteo-albini"}
          />
        </InnerWrapper>
        <InnerWrapper>
          <MenuBox
            title={"Articoli"}
            description={"Approfondimenti"}
            icon={<LayersIcon />}
            link={"/risorse/articoli/"}
          />
          <MenuBox
            title={"Talks"}
            description={"Il mio Podcast"}
            icon={<StereoIcon />}
            link={"/risorse/podcast/inmost-talks/"}
          />
        </InnerWrapper>
      </OuterWrapper>
    </>
  );
};

export default MenuBoxWrapper;

const OuterWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  cursor: pointer;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
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
