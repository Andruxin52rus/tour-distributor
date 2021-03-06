const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: "./src/main.jsx"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      app: path.resolve(__dirname, "src/app")
    }
  },

  module: {
    rules: [{
        test: /\.js|jsx?$/,
        //  loader: "babel-loader"
        exclude: /node_modules/,
        loader: "babel-loader"
      },

      // // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },

  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/assets/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};