var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './client'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [
      // js
      { test: /.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      // CSS
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'client'),
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  }
};


/*
var path = require('path');

module.exports = {
  entry: './client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'client'),
        query: {
          presets: ['react','es2015']
        }
      }
    ]
  }
};




{
  test: /\.js$/,
  loaders: ['babel'],
  include: path.join(__dirname, 'client')
},


{
  test: /\.jsx?$/,
  loader: 'babel-loader',
  include: path.join(__dirname, 'client'),
  query: {
    presets: ['react','es2015']
  }
}



loaders: [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      presets: ['react']
    }
  }
]
*/
