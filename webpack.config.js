const webpack = require('webpack');
const path = require('path');

require('dotenv').config({ path: './.env' })
module.exports = (env) => {
  
  return {
  entry: path.resolve(__dirname, './src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.(js||jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', 'jsx'],
    fallback: {
      "fs": false,
      "path": false,
      "os": false
    }
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.EnvironmentPlugin(['OPENAI_API_KEY']),
   
  ],
  devServer: {
    static: path.resolve(__dirname, './public'),
    hot: true
  },
}};
