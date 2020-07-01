module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: "Caleb McQuaid",
        developerURL: null,
        dir: "auto",
        lang: "en-US",
        background: "#fff",
        theme_color: "#fff",
        display: "standalone",
        orientation: "any",
        version: "1.0",

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-source-spotify`,
      options: {
        clientId: `c46f9cdf727c4c909d3ae9f86b4abb3e`,
        clientSecret: `6fc06054b623479e8742ff3d0c8f6676`,
        refreshToken: `AQAyZF26_bNHvuM_iNpvMu7aHm14Dl3ECJ2np9b77FV0BCTDG6I3Covi1XUt7Aonu1WitET74ynmJi0usXsTVJMNhR_8sZoACvFEPhdkVJzhpE259Nmh_fw2bK9JKm0tgRs`,
    
        fetchPlaylists: true, // optional. Set to false to disable fetching of your playlists
        fetchRecent: true, // optional. Set to false to disable fetching of your recently played tracks
        timeRanges: ['short_term', 'medium_term', 'long_term'], // optional. Set time ranges to be fetched
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-140598401-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
      },
    },
  ],
}
