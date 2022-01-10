const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "./public/"),
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].template = "./src-public/index.html";
      return args;
    });
  },
  devServer: {
    historyApiFallback: true,
    host: "cv-semplice.local",
    allowedHosts: [".cv-semplice.local", ".mio-curriculum.local"],
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
