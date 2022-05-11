const path = require('path')

module.exports = {
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
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
}
