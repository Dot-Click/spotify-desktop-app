module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {},
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
    {
      name: "@electron-forge/plugin-webpack",
      devServer: {
        headers: {
          "Content-Security-Policy":
            "default-src 'self' 'unsafe-inline' data:; connect-src 'self' https://spotify-json.vercel.app;",
        },
      },
      config: {
        mainConfig: "./webpack.main.config.js",
        devContentSecurityPolicy:
          "connect-src 'self' https://spotify-json.vercel.app 'unsafe-eval'",
        renderer: {
          config: "./webpack.renderer.config.js",

          entryPoints: [
            {
              html: "./src/index.html",
              js: "./src/renderer.js",
              name: "main_window",
              preload: {
                js: "./src/preload.js",
              },
            },
          ],
        },
      },
    },
  ],
};
