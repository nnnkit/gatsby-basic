module.exports = {
  siteMetadata: {
    title: "Gatsby Blog"
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js")
        }
      }
    }
  ]
};
