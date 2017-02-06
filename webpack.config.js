var webpack = require('webpack');
var path = require('path');

var WEBSOCK_PORT = process.env.WEBSOCK_PORT
var WEBSOCK_URL = process.env.WEBSOCK_URL

var BUILD_DIR = path.resolve(__dirname, 'build')
var APP_DIR = path.resolve(__dirname, 'src')

var config = {
		entry: APP_DIR + '/index.jsx',
		output: {
				path: BUILD_DIR,
				filename: 'bundle.js'
		},
		resolve: {
			extensions: ['.js', '.jsx']
		},
		module: {
				loaders: [
						{
								test: /\.jsx?/,
								include: APP_DIR,
								loader: 'babel-loader'
						}
				]
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.WEBSOCK_PORT': JSON.stringify(WEBSOCK_PORT || 9000),
				'process.env.WEBSOCK_URL': JSON.stringify(WEBSOCK_URL || "ws://localhost")
			})
		]
};

module.exports = config
