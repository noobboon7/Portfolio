module.exports = {
  siteMetadata: {
    title: `JerryVee`,
    description: `Full Stack web developer site displaying skills`,
    author: `Jerry Velazquez`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth:  750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jerrys-Portfolio`,
        short_name: `jVport`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // { ***//core plugin no longer working until further notice; module doesn't bypass reCaptcha, from the issues the author suggests using a paid service which isn't something I think gatsby would want to integrate - omonk ***
    //   resolve: `gatsby-source-medium`,
    //   options: {
    //     username: `@jvr572`,
    //     limit: 10,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
