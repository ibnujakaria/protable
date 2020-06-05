const merge = require('webpack-merge')
const common = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  entry: {
    index: './example/index.js',
    bootstrap: './example/bootstrap.js',
    foundation: './example/foundation.js',
    tailwind: './example/tailwind.js',
    ['semantic-ui']: './example/semantic-ui.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html',
      chunks: ['index'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './example/bootstrap.html',
      chunks: ['bootstrap'],
      filename: 'bootstrap.html'
    }),
    new HtmlWebpackPlugin({
      template: './example/semantic-ui.html',
      chunks: ['semantic-ui'],
      filename: 'semantic-ui.html'
    }),
    new HtmlWebpackPlugin({
      template: './example/foundation.html',
      chunks: ['foundation'],
      filename: 'foundation.html'
    }),
    new HtmlWebpackPlugin({
      template: './example/tailwind.html',
      chunks: ['tailwind'],
      filename: 'tailwind.html'
    })
  ]
})
