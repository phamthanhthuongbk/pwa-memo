module.exports = {
    pwa: {
      themeColor: "#42b983",
      msTileColor: "#42b983",
      appleMobileWebAppCache: "yes",
      manifestOptions: {
        background_color: "#42b983"
      },
      icons: [
        {
          src: "./img/icons/logo-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "./img/icons/logo-512x512.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "./img/icons/logo-maskable-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "./img/icons/logo-maskable-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable"
        }
      ]
    }
};