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
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts", // name of the folder
        path: "posts" // path of url
      }
    }
  ]
};
