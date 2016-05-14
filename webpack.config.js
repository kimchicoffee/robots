var path = require('path')
var webpack = require('webpack')

module.exports = {
	devtool: 'cheap-module-eval-source-map',

	entry: [
		'webpack-hot-middleware/client',
		'./index.js'
	],

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},

	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],	

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: [ 'babel' ],
				exclude: /node_modules/
			},

			{
				test: /\.css$/,
				loaders: [ 'style', 'css' ]
			}
		]
	}
}