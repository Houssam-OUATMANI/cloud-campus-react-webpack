const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle[contenthash].js",
    clean : true
  },
  module : {
    rules : [
        {test : /\.(js|jsx)$/, exclude : /node_modules/, use : ["babel-loader"]},
        {test : /\.(png|jpeg|jpg|gif|webp|woff|woff2)$/,  use : ["file-loader"]},
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({template : "public/index.html"})
  ],
  resolve : {
    extensions : ["", ".js", ".jsx"]
  },
};
