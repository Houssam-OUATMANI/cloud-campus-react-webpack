const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");

const devConfig = {
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  mode: "development",
  devtool: "source-map",

  devServer: {
    static: { directory: path.join(__dirname, "public") },
    port: 9000,
    open: true,
    historyApiFallback: true,
    compress: true,
  },
};

module.exports = merge(common, devConfig)