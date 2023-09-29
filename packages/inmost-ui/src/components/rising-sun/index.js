import React from "react";
import RisingSun from "@svg/rising-sun.svg";
import styled from "@emotion/styled";

const OuterWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  height: 320px;
  width: 320px;
  border-radius: 50%;
`;

const SunLogo = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <RisingSun />
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default SunLogo;
