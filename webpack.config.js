let path = require("path");
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "main.js",
    publicPath: "/dist/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
};

module.exports = (env, options) => {
  let isProd = options.mode === "production";

  conf.devtool = isProd ? false : "eval-cheap-module-source-map";
  conf.target = isProd ? 'brouserslist' : 'web';

  console.log("options =", options);
  return conf;
};
