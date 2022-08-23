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
  }
};
