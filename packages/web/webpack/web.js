require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const helpers = require('env-var-helpers');

const GitRevisionPlugin = require('git-revision-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const git = new GitRevisionPlugin();
const config = require('./common.js');

module.exports = merge(config, {
  entry: {
    index: [path.resolve(__dirname, '..', 'src/index.tsx')],
  },
  output: {
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].bundle.js',
    devtoolModuleFilenameTemplate: 'webpack:///[resource-path]',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      workers: helpers.isProd ? ForkTsCheckerWebpackPlugin.ONE_CPU : ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
      reportFiles: ['src/**/*.{ts,tsx}'],
    }),
    new webpack.DefinePlugin({
      'process.env.SERVER_API': process.env.SERVER_API && JSON.stringify(process.env.SERVER_API),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '..', 'src/index.html'),
      data: {
        version: JSON.stringify(git.version()),
        commitHash: JSON.stringify(git.commithash()),
      },
      minify: {
        removeComments: false,
        collapseWhitespace: false,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
});
