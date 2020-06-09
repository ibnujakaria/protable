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
    ['semantic-ui']: './example/semantic-ui.js',
    scss: './src/scss/protable.scss'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'example/data'), to: 'data' }
      ]
    }),
    new HtmlWebpackPlugin({
      template: './example/index.html',
      chunks: ['index', 'scss'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './example/bootstrap.html',
      chunks: ['bootstrap', 'scss'],
      filename: 'bootstrap.html'
    }),
    new HtmlWebpackPlugin({
      template: './example/semantic-ui.html',
      chunks: ['semantic-ui', 'scss'],
      filename: 'semantic-ui.html'
    }),
    new HtmlWebpackPlugin({
      template: './example/foundation.html',
      chunks: ['foundation', 'scss'],
      filename: 'foundation.html'
    }),
    new HtmlWebpackPlugin({
      template: './example/tailwind.html',
      chunks: ['tailwind', 'scss'],
      filename: 'tailwind.html'
    })
  ]
})
