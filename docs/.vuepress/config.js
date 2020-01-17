const path = require("path");

const hostname = "https://docs.molit.eu";
const base = "/molit-docs/";

module.exports = {
  base,

  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" }
    ],
    ["meta", { name: "theme-color", content: "#004a6b" }]
  ],

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "de-DE",
      title: "MOLIT Docs",
      description: "Dokumentation für das MOLIT Framework"
    },
    "/en/": {
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "MOLIT Docs",
      description: "Documentation for the MOLIT Framework"
    }
  },

  themeConfig: {
    locales: {
      "/": {
        selectText: "Sprache",
        label: "Deutsch",
        serviceWorker: {
          updatePopup: {
            message: "Neue Inhalte verfügbar.",
            buttonText: "Aktualisieren"
          }
        },
        lastUpdated: "Zuletzt aktualisiert",
        nav: [
          { text: "Anleitung", link: "/v2019.3/guide/" },
          { text: "Demo", link: "https://demo.molit.eu" },
          { text: "Impressum", link: "https://molit.eu/impressum/" },
          {
            text: "Version",
            items: [
              { text: "v2019.3", link: "/v2019.3/guide/" },
              { text: "v2019.2", link: "/v2019.2/guide/" },
              { text: "v2019.1", link: "/v2019.1/guide/" }
            ]
          }
        ],
        algolia: {},
        sidebar: {
          "/v2019.3/guide/": [
            {
              title: "Informationen", // required
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1, // optional, defaults to 1
              children: [
                "",
                "release-description",
                "requirements",
                "architecture"
              ]
            },
            {
              title: "Ticketsystem", // required
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1, // optional, defaults to 1
              children: ["manual"]
            },
            {
              title: "FAQ", // required
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1, // optional, defaults to 1
              children: ["faq"]
            }
          ],
          "/v2019.2/guide/": [
            {
              title: "Informationen", // required
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1, // optional, defaults to 1
              children: [
                "",
                "release-description",
                "requirements",
                "architecture"
              ]
            }
          ],
          "/v2019.1/guide/": [
            {
              title: "Informationen", // required
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1, // optional, defaults to 1
              children: [
                "",
                "release-description",
                "requirements",
                "architecture"
              ]
            }
          ]
        }
      },
      "/en/": {
        // text for the language dropdown
        selectText: "Languages",
        // label for this locale in the language dropdown
        label: "English",
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          { text: "Guide", link: "/en/v2019.2/guide/" },
          { text: "Demo", link: "https://demo.molit.eu" },
          { text: "Imprint", link: "https://molit.eu/en/imprint/" },
          {
            text: "Version",
            items: [
              { text: "v2019.3", link: "/en/v2019.3/guide/" },
              { text: "v2019.2", link: "/en/v2019.2/guide/" },
              { text: "v2019.1", link: "/en/v2019.1/guide/" }
            ]
          }
        ],
        sidebar: {
          "/en/v2019.3/guide/": [
            {
              title: "Information", // required
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1, // optional, defaults to 1
              children: [
                "",
                "release-description",
                "requirements",
                "architecture"
              ]
            },
            {
              title: "Ticketsystem", // required
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1, // optional, defaults to 1
              children: ["manual"]
            },
            {
              title: "FAQ", // required
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1, // optional, defaults to 1
              children: ["faq"]
            }
          ],
          "/en/v2019.2/guide/": [
            {
              title: "Information", // required
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1, // optional, defaults to 1
              children: [
                "",
                "release-description",
                "requirements",
                "architecture"
              ]
            }
          ],
          "/en/v2019.1/guide/": [
            {
              title: "Information", // required
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1, // optional, defaults to 1
              children: [
                "",
                "release-description",
                "requirements",
                "architecture"
              ]
            }
          ]
        }
      }
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "../.vuepress/assets")
      }
    }
  },

  plugins: {
    sitemap: {
      hostname: hostname + base
    }
  }
};
