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
  // configureWebpack: {
  //   devServer: {
  //     historyApiFallback: true 
  //   }
  // }
};