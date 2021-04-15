const webpack = require("webpack");
module.exports = {
    configureWebpack: {
      devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : null,
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jquery: 'jquery',
          'window.jQuery': 'jquery',
          jQuery: 'jquery'
        })
      ]
    },
  }