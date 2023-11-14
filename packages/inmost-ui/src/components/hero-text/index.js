import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Text from "@commons/text";

const StyledHeroText = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.serif};
  justify-content: space-between;
  text-transform: uppercase;
  line-height: 1em;
`;

const HeroText = ({ text }) => {
  return (
    <StyledHeroText>
      {text.map((t, index) => (
        <Text
          key={index}
          style={{ textAlign: index % 2 === 0 ? "left" : "right" }}
        >
          {t}
        </Text>
      ))}
    </StyledHeroText>
  );
};

HeroText.propTypes = {
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HeroText;
