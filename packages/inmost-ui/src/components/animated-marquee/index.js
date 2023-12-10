import React from "react";
import Spacer from '@components/spacer';
import { ParallaxTextSerifBig, ParallaxTextSansSmall  } from "@components/parallax-text";

const AnimatedMarquee = ({ title, subtitle }) => {
  return (
    <div style={{ position: "relative" }}>
      <Spacer line space={2} />
        <ParallaxTextSerifBig baseVelocity={-1} >{ title }</ParallaxTextSerifBig>
      <Spacer line space={2} />
        <ParallaxTextSansSmall baseVelocity={1}>{ subtitle }</ParallaxTextSansSmall>
      <Spacer line space={1} />
    </div>
  );
}

export default AnimatedMarquee;