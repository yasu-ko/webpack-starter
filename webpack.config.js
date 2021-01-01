const webpack = require('webpack');

module.exports = {
  mode: "development",

  entry: {
    script: "./src/assets/js/script.js",
  },

  output: {
    filename: "./assets/js/[name].js",
    path: __dirname + "/public_html",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
          $: 'jquery',
    })
  ]
};
