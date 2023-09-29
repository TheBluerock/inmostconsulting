const path = require("path");

module.exports = (options) => {
  return {
    plugins: [
      {
        resolve: "gatsby-plugin-alias-imports",
        options: {
          alias: {
            "@helpers": path.resolve(__dirname, "./src"), // Corrected path
          },
        },
      },
    ],
  };
};
