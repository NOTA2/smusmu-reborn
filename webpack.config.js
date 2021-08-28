const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  entry: './src/app.js',
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
        "fs": false,
        "net": false,
        "os": false,
        "tls": false,
        "cardinal": false,
        "module": false,
        "date-utils": false,
        "child_process": false,
        "path": false,
        "http": false,
        "https": false,
        "stream": false,
        "util": false,
        "zlib": require.resolve("browserify-zlib"),
        "process": require.resolve("process/browser"),
        "timers": require.resolve("timers-browserify"),
        "assert": false,
        "url": require.resolve("url/"),
        "crypto": false,
        "querystring": require.resolve("querystring-es3"),
        "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
      } 
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            test: /\.html$/,
            use: [{
                loader: "html-loader",
                options: { minimize: true }
            }]
    },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
        },
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: ["ts-loader"],
        },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]?[hash]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
        filename: 'output.pug',
        minify: false
      }),
    new HtmlWebpackPugPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new NodePolyfillPlugin(),
    new CleanWebpackPlugin()
  ]
};