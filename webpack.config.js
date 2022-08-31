const webpack = require('webpack');
const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

require('dotenv').config({ path: './.env' })
module.exports = (env) => {
  
  return {
  entry: path.resolve(__dirname, './src/index.jsx'),
  node: false,
  module: {
    rules: [
      {
        test: /\.(js||jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
       {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  externals: {
    bufferutil: "bufferutil",
    "utf-8-validate": "utf-8-validate",
  },
  resolve: {
    extensions: ['*', '.js', 'jsx'],
    fallback: {
      "fs": false,
      "path": false,
      "os": false,
      "net": false,
      "tls": false
    }
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.EnvironmentPlugin(['OPENAI_API_KEY']),
    new NodePolyfillPlugin()
   
  ],
  devServer: {
    static: path.resolve(__dirname, './public'),
    hot: true
  },
 
}};
