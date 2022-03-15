const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  outputDir: path.resolve("./public"),
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [{ from: "src-public/legal", to: "legal" }],
      }),
    ],
  },

  devServer: {
    historyApiFallback: true,
    host: "cv-semplice.local",
    allowedHosts: [
      "cv-semplice.local",
      "mio-curriculum.local",
      "cv-immediat.local",
      "cv-rapide.local",
    ],
  },
  pluginOptions: {
    i18n: {
      locale: "it",
      fallbackLocale: "it",
      localeDir: "locales",
      enableInSFC: true,
    },
  },
  // configureWebpack: {
  //   devServer: {
  //     historyApiFallback: true
  //   }
  // }
};
