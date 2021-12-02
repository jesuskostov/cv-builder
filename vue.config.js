const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, "./public/"),
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].template = './src-public/index.html'
          return args
        })

        
    },
    configureWebpack: {
      devServer: {
        historyApiFallback: true
      }
    }
  };

  // TODO: copy plugin
  // https://forum.vuejs.org/t/vue-cli3-how-to-change-default-public-directory/38796/3