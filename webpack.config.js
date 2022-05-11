const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map', // processo mais lento e com mais detalhes woEval
  //o devtool vai me fornecer o codigo original da aplicação e nao o arquivo dist intendivel.
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  //qual o arquivo inicial da aplicacao
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  //qual vai ser o arquivo gerado pelo webpack ou seja a pasta dist
  resolve: {
    extensions: ['.js', '.jsx'],
    //desse jeito estou vendo quais extensoes sao validas para leitura
  },
  devServer: {
    // contentBase: path.resolve(__dirname, 'public'),
    // contentBase Webpack Version v4
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
  },
  //automatizar o processo de yarn webpack para que fique automatico e nao precise ficar dando o comand
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // preciso criar uma rule agora para arquivos css tambem
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
