const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css|scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.ejs' }),
    new webpack.DefinePlugin({
      __API_HOST__: process.env.API_HOST || "'http://localhost:9001'"
    })
  ],
  devServer: {
    publicPath: '/',
    historyApiFallback: true
  }
}
