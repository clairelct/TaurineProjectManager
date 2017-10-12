const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // Configuration des plugins
  plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html'
      }),
      new ExtractTextPlugin("styles.css")
  ],
  // Configuration des loaders
  module: {
    // Css
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {}
        }
      }
    ]
  }
  };

