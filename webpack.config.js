'use strict'

var webpack = require('webpack')
var path = require('path')

module.exports = {
  debug: true,
  entry: [
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    "./src/main.js",
  ],
  output: {
    path: "./public/build/",
    filename: "bundle.js",
		publicPath: "/build/"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules|bower_components/, loaders: ["babel-loader"]},
      { test: /\.jsx$/, exclude: /node_modules|bower_components/, loaders: ["react-hot", "babel-loader"]}
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}


