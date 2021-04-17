module.exports = {
    pwa: {
      name: 'My App',
      themeColor: "#42b983",
      msTileColor: "#42b983",
      appleMobileWebAppCache: "yes",
      manifestOptions: {
        background_color: "#42b983"
      },
      iconPaths: {
        faviconSVG: 'src/assets/logo.png',
        favicon32: 'src/assets/logo.png',
        favicon16: 'src/assets/logo.png',
        appleTouchIcon: 'src/assets/logo.png',
        maskIcon: 'src/assets/logo.png',
        msTileImage: 'src/assets/logo.png'
      }
    }
};