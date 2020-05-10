const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  entry: {
    app: './example/app.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  }
})
