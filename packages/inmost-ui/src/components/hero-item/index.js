import React from "react";
import Text from "@commons/text";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

// Define the styled component for HeroText
const HeroTextWrapper = styled.span`
  display: flex;
  flex: 1;
  grid-column: ${(props) =>
    props.gridColumn ||
    "1/6"}; // Customize grid-column if provided, default to '1/3'
  grid-row: ${(props) =>
    props.gridRow || "1"}; // Customize grid-row if provided, default to '1'
  /* Add any other styles you need here */
  justify-content: ${(props) =>
    props.align === "end" ? "flex-end" : "flex-start"};
`;

const textStyles = css`
  margin: 0;
  padding: 0;
  line-height: 0.8;
`;

const HeroItem = ({ text, gridColumn, gridRow, align }) => {
  return (
    <HeroTextWrapper gridColumn={gridColumn} gridRow={gridRow} align={align}>
      <Text size={96} fonttype={"serif"} css={textStyles}>
        {text}
      </Text>
    </HeroTextWrapper>
  );
};

export default HeroItem;
