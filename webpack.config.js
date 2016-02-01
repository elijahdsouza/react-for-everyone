module.exports = {
  context: __dirname + '/src',
  entry: './App.js',

  output: {
    filename: 'app.js',
    path: __dirname + '/dist',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      }
    ],
  },
}
