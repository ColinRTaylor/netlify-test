const config = {
  siteTitle: `Jessie and Colin - Wedding`,
  siteUrl: `https://www.jessieandcolin.life`,
  siteDescription: `Jessica Frederick and Colin Taylor Wedding`,
  pathPrefix: `.`
};
module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    siteDescription: config.siteDescription
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: `Jessie and Colin`,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: "#e0e0e0",
        theme_color: "aliceblue",
        display: "minimal-ui"
      }
    }
  ]
};
