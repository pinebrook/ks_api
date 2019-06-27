const path = require('path');

const nodeExternals = require('webpack-node-externals');
const MinifyPlugin = require('babel-minify-webpack-plugin');

const indexFile = path.resolve(__dirname, './src/index.js');

module.exports = {
	mode: 'development',
	target: 'node',
	externals: [nodeExternals()],
	entry: {
		app: indexFile
	},
	output:  {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	plugins: [
		new MinifyPlugin()
	]
}