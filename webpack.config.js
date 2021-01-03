module.exports = {
  mode: "development",
  // mode: "production",

  entry: {
    script: "./src/assets/js/script.ts",
  },

  output: {
    filename: "./assets/js/[name].js",
    path: __dirname + "/public_html",
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
