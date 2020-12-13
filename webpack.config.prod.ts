import * as webpack from 'webpack';
import * as path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin'

const Dotenv = require('dotenv-webpack')

const config: webpack.Configuration = {
  mode: 'development',
  entry:[
    './node_modules/modern-css-reset/dist/reset.css',
    path.resolve(__dirname, 'src/')
  ],
  output:{
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins:[
    new HTMLWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new Dotenv({ path: path.resolve(__dirname, './.env.production') })
  ],
  resolve:{
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  module:{
    rules:[
      {
        test: /\.tsx?$/,
        use:{
          loader: 'ts-loader',
        },
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url-loader'
      },
    ]
  }
};

export default config
