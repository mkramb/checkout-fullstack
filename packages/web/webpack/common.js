const webpack = require('webpack');
const { isDevelopment, isProd } = require('env-var-helpers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const extractCss = new MiniCssExtractPlugin({
  filename: isDevelopment ? '[name].css' : '[name].[hash].css',
  chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
});

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
  devServer: {
    overlay: { errors: true, warnings: true },
    historyApiFallback: true,
    host: '0.0.0.0',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    pathinfo: false,
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$|\.jsx$|\.tsx?$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
      {
        test: /\.js$|\.jsx$|\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              onlyCompileBundledFiles: true,
            },
          },
        ],
      },
      {
        test: /\.css$|\.scss|\.sass/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new webpack.WatchIgnorePlugin([/css\.d\.ts$/]), extractCss, new webpack.NoEmitOnErrorsPlugin()],
};
