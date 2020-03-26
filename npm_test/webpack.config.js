const path = require("path");
const webpackMerge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const loadModeConfig = env => require(`./build-utils/${env.mode}.config`)(env);
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const WebpackBar = require("webpackbar");

module.exports = env =>
  webpackMerge(
    {
      mode: env.mode,
      context: path.resolve(__dirname, "src"),

      entry: { main: "./index.js" },
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].boundle.js"
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              {
                loader: "url-loader",
                options: {
                  name: "[path][name].[ext]",
                  limit: 8192,
                  esModule: false
                }
              },
              "img-loader"
            ]
          }
        ]
      },

      plugins: [
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new WebpackBar()
      ]
    },
    loadModeConfig(env)
  );
