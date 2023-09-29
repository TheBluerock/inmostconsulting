import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";

const DuoToneImage = ({ alt }) => {
  const theme = useTheme();

  return (
    <StaticImage
      src="./test.png" // Replace with the correct image path
      alt={alt || ""}
      placeholder="blurred"
      layout="fullWidth"
      aspectRatio={2 / 1}
      transformOptions={{
        duotone: {
          highlight: "#0000ff", // Specify your highlight color
          shadow: "#ff0000", // Specify your shadow color
          opacity: 1, // Adjust the opacity (0 to 1)
        },
        fit: "cover",
      }}
      style={{
        borderRadius: "500px",
        border: `2px solid ${theme.colors.primary}`,
      }}
    />
  );
};

export default DuoToneImage;
