module.exports = {
  siteMetadata: {
    title: `JerryVee`,
    description: `Hello worlds;
    This is my portfolio. 
    I decide venture newish technologies... 
    Projects I've done throughout my new journey as a web developer.`,
    author: `Jerry Velazquez`,
    headline: `express the inexpressible`,
    logo: `./src/assets/img/logo.png`,
    me: `./src/assets/img/me.jpg`,
  },

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jerry's Portfolio`,
        short_name: `Portfolio`,
        start_url: `/splash`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/img/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Source Sans Pro",
            "sans-serif",
            "Lora",
            "serif",
            "Proza Libre",
          ],
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
  ],
}
