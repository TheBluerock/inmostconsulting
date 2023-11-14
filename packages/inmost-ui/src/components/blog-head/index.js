import React from "react";
import BlogHeading from "@components/blog-heading";
import BlogExcerpt from "@components/blog-excerpt";
import BlogHeroImage from "@components/blog-hero-image";
import { useTheme } from "@emotion/react";
import Spacer from "@components/spacer";
import BlogDetails from "@components/blog-details";

const BlogHead = ({
  title,
  date,
  author,
  tags,
  excerpt,
  image,
  alt,
  category,
}) => {
  const theme = useTheme();
  return (
    <>
      <BlogHeroImage image={image} alt={alt} />
      <Spacer space={4} />
      <BlogHeading
        as={"h1"}
        fontSize={theme.typography.h2}
        fontWeight={400}
        textTransform={"uppercase"}
        serif
      >
        {title}
      </BlogHeading>
      <BlogExcerpt excerpt={excerpt} />
      <Spacer space={8} line />
      <BlogDetails 
          date={date}  
          author={author} 
          category={category} />
      <Spacer space={8} line />
    </>
  );
};

export default BlogHead;
