const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname + '/main.js')
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    },{
      test: /\.pug$/,
      loader: 'pug-plain-loader'
    }, {
      test: /\.js$/,
      loader: [
        'babel-loader'
      ],
      exclude: /node_modules/
    }, {
      test: /\.sass$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            indentedSyntax: true
          }
        }
      ]
    }]
  },
  devServer: {
    inline: true
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html')
    }),
    new VueLoaderPlugin()
  ]
}