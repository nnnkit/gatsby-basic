module.exports = {
  siteMetadata: {
    title: "Gatsby Blog"
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js")
        },
        gatsbyRemarkPlugins: [
          { resolve: "gatsby-remark-images" },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: "÷"
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts", // name of the folder
        path: "posts" // path of url
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images", // name of the folder
        path: "images" // path of url
      }
    }
  ]
};
