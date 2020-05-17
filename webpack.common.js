const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: {
    ['pro-table']: './src/index.js',
  },
  optimization: {
    usedExports: true
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/pro-table.css',
      chunkFilename: '[id].css',
    }),
    new CompressionPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ["@babel/plugin-proposal-optional-chaining"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader', // Run postcss actions
            options: {
              plugins: function () { // postcss plugins, can be exported to postcss.config.js
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
