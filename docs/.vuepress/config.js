module.exports = {
  base: "/vitu-docs/",

  head: [
    [
      "link",
      { rel: "icon", href: "https://vitu.molit.eu/favicons/favicon.ico" }
    ]
  ],

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "de-DE",
      title: "VITU Docs",
      description: "Virtuelles Tumorboard"
    },
    "/en/": {
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "VITU Docs",
      description: "Virtual Tumor Board"
    }
  },

  themeConfig: {
    locales: {
      "/": {
        selectText: "Sprache",
        label: "Deutsch",
        serviceWorker: {
          updatePopup: {
            message: "Es ist neuer Inhalt verfügbar.",
            buttonText: "Aktualisieren"
          }
        },
        lastUpdated: "Zuletzt aktualisiert",
        nav: [
          /*{ text: "Nested", link: "/nested/" }*/
        ],
        algolia: {},
        sidebar: {
          "/": [
            {
              title: "Informationen", // required
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1, // optional, defaults to 1
              children: ["/", "requirements"]
            }
          ],
          "/nested/": [
            /* ... */
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
          /*{ text: "Nested", link: "/en/nested/" }*/
        ],
        sidebar: {
          "/en/": [
            {
              title: "Information", // required
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1, // optional, defaults to 1
              children: []
            }
          ],
          "/en/nested/": [
            /* ... */
          ]
        }
      }
    }
  }
};
