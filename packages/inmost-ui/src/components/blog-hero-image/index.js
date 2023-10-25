import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const styles = css`
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 5/2;

  @media ${({ theme }) => theme.device.medium} {
    aspect-ratio: 1;
  }

  @media ${({ theme }) => theme.device.small} {
    aspect-ratio: 2/3;
  }
`;

const BlogHeroImage = ({ image, alt }) => {
  return (
    <ImageContainer>
      <GatsbyImage image={image} alt={alt} css={styles} objectFit={"cover"} />
    </ImageContainer>
  );
};

export default BlogHeroImage;
