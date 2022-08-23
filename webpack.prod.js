const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const prodConfig ={
  mode : "production",
  module : {
    rules : [
        {test : /\.css$/,  use : [MiniCssExtractPlugin.loader, "css-loader"]},
        {test : /\.(scss|sass)$/,  use : [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]}
    ]
  },
  
  plugins : [
    new MiniCssExtractPlugin({filename : "styles.[contenthash].css"})
  ],
};

module.exports = merge(common, prodConfig )
