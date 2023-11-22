import device from "./device";

// Define named constants for font sizes and ratios
const FONT_SIZE_BASE = {
  mobile: (29 * 100) / 480,
  tablet: (24 * 100) / 768,
  desktop: (21 * 100) / 1280,
};

const RATIO = {
  mobile: 1.25,
  tablet: 1.33,
  desktop: 1.4,
};

// Function to calculate typography sizes for different headings
const calculateTypographySizes = (baseSizes, ratio, pow) => {
  const typographySizes = {};
  for (const screenSize in baseSizes) {
    if (pow === 0) {
      typographySizes[screenSize] = baseSizes[screenSize] + "vw";
    } else {
      typographySizes[screenSize] =
        baseSizes[screenSize] * Math.pow(ratio[screenSize], pow) + "vw"; // Add 'vw' unit
    }
  }
  return typographySizes;
};

const typography = {
  small: { mobile: 12, tablet: 14, desktop: 16 },
  p: calculateTypographySizes(FONT_SIZE_BASE, RATIO, 0),
  h5: calculateTypographySizes(FONT_SIZE_BASE, RATIO, 1),
  h4: calculateTypographySizes(FONT_SIZE_BASE, RATIO, 2),
  h3: calculateTypographySizes(FONT_SIZE_BASE, RATIO, 3),
  h2: calculateTypographySizes(FONT_SIZE_BASE, RATIO, 4),
  h1: calculateTypographySizes(FONT_SIZE_BASE, RATIO, 5),
  big: calculateTypographySizes(FONT_SIZE_BASE, RATIO, 6),
};

export default typography;
