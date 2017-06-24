module.exports = {
  siteMetadata: {
    title: "Simply",
    author: "Simply",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-image`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: "Simply Insurance",
              short_name: "Simply",
              start_url: "/",
              background_color: "#ffffff",
              theme_color: "#33ccff",
              display: "minimal-ui",
              icons: [
                {
                  // Everything in /static will be copied to an equivalent
                  // directory in /public during development and build, so
                  // assuming your favicons are in /static/favicons,
                  // you can reference them here
                  src: `/favicons/android-chrome-192x192.png`,
                  sizes: `192x192`,
                  type: `image/png`,
                },
                {
                  src: `/favicons/android-chrome-512x512.png`,
                  sizes: `512x512`,
                  type: `image/png`,
                },
              ],
            },
          },
          "gatsby-remark-prismjs",
          {
            resolve: `gatsby-plugin-nprogress`,
            options: {
              // Setting a color is optional.
              color: `#33ccff`,
            }
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
      }
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
