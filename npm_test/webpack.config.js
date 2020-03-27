const path = require('path');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const loadModeConfig = env => require(`./build-utils/${env.mode}.config`)(env);
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = env =>
  webpackMerge(
    {
      mode: env.mode,
      context: path.resolve(__dirname, 'src'),

      entry: './index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].boundle.js',
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: ['url-loader?limit=10000', 'img-loader'],
          },
          {
            test: /\.html$/i,
            use: 'html-loader',
          },
          { test: /\.hbs$/, use: 'handlebars-loader' },
        ],
      },

      plugins: [
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new WebpackBar(),
      ],
    },
    loadModeConfig(env),
  );
