const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js"
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, "template.html")
  })],
  devServer: {
    hot: true,
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.less$/,
        loaders: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: { javascriptEnabled: true }
          }
        ]
      }
    ]
  }
};