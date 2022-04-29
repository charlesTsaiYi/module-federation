const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:5050/'
  },
  mode: 'development',
  devServer: {
    port: 5050,
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
      name: "HeadingApp",
      filename: 'remoteEntry.js',
      // remotes: {
      //   HelloCardApp: 'HelloCardApp@http://localhost:9005/remoteEntry.js',
      // },
      exposes: {
        './Heading': './src/component/Heading/Heading.js'
      }
    })
  ]
}