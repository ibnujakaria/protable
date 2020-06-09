const merge = require('webpack-merge')
const common = require('./webpack.common')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  entry: {
    ['protable.min']: [
      './src/index.js',
      './src/scss/protable.scss'
    ],
  },
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min.js/
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.min\.css$/i,
      })
    ]
  }
})
