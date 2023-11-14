import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Container from "@commons/container";

const BlogImage = ({ image, alt }) => {
  return (
    <Container width={"65vw"}>
      <GatsbyImage image={image} alt={alt} />
    </Container>
  );
};

export default BlogImage;
