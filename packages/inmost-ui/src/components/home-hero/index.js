import React from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "@emotion/styled";
import SunLogo from "@components/sun-logo";
import Container from "@commons/container";
import Spacer from "@components/spacer";
import Text from "@commons/text";
import AnimatedTitle from "@components/animated-title";

const HomeHero = () => {
  return (
    <>
      <Spacer space={4} />
      <Container>
        <AnimatedTitle />
      </Container>
      <Spacer space={4} />
      <Container width={"65vw"} align={"center"}>
        <SunLogo />
      </Container>
      <Spacer space={4} />
    </>
  );
};

export default HomeHero;

const Wrapper = styled.div`
    width: 100%,
    height: 100%,
    border: 1px solid blue;
`;
