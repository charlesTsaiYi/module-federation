const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:9005/'
  },
  mode: 'development',
  devServer: {
    port: 9005,
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "HelloCardApp",
      filename: 'remoteEntry.js',
      exposes: {
        './HelloCard': './src/component/HelloCard/HelloCard.js'
      }
    })
  ]
}