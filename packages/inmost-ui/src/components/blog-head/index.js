import React from "react";
import BlogHeading from "@components/blog-heading";
import BlogExcerpt from "@components/blog-excerpt";
import BlogHeroImage from "@components/blog-hero-image";
import Container from "@commons/container";
import { useTheme } from "@emotion/react";
import Spacer from "@components/spacer";
import BlogDetails from "@components/blog-details";

const BlogHead = ({ title, date, author, tags, excerpt, image, alt }) => {
  const theme = useTheme();
  return (
    <>
      <BlogHeroImage image={image} alt={alt} />
      <Spacer space={4} />
      <BlogHeading as={"h1"} fontSize={theme.typography.h2} serif>
        {title}
      </BlogHeading>
      <Spacer space={2} />
      <BlogExcerpt excerpt={excerpt} />
      <Spacer space={8} line />
      <BlogDetails date={date} />
      <Spacer space={8} line />
    </>
  );
};

export default BlogHead;
