const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: [ 
      './main.js',
  ],
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
        ],
        test:/\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'), 
    ],
  }, 
};
