module.exports = {
  siteMetadata: {
    title: `JerryVee`,
    description: `This is my portfolio. I was determinded to learn a new "stack" so I decide ventur into technologies I wanted to learn. One thing lead to another and now I'm building a gatsby site. This is a display of my work I've done through my new journey as a web developer.`,
    author: `Jerry Velazquez`,
    headline: `express the inexpressable`,
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


    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline

    
    ////////////// plug-in removed in place for another///////////
    // {
    //   resolve: `gatsby-plugin-layout`,
    //   options: {
    //     component: require.resolve(`./src/components/layout.js`),
    //   },
    // },
  ],
}
