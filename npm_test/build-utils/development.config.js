const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => ({
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    compress: true,
    port: 9000,
    noInfo: true,
    quiet: true,
    clientLogLevel: "error",
    stats: "errors-only",
    clientLogLevel: "warning",
    open: true
  }
});
