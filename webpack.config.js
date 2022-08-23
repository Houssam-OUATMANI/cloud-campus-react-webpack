const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle[contenthash].js",
  },
  module : {
    rules : [
        {test : /\.(js|jsx)$/, exclude : /node_modules/, use : ["babel-loader"]}
    ]
  },
  resolve : {
    extensions : ["", "js", "jsx"]
  },
  devServer : {
    static : {directory : path.join(__dirname, "public")},
    port : 9000,
    open : true
  }

};
