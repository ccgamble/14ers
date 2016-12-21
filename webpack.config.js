const path = require('path');

module.exports = {
  entry: {
    main: ['babel-polyfill', './lib/index.js']
  },
	output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-1'],
          plugins: ['transform-class-properties'],
        },
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
			{ test: /\.json$/, loader: 'json' },

    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css'],
  },
	devServer: {
		historyApiFallback: true
	}
};
