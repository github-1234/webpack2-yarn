module.exports = {
	context: __dirname + '/src',
	entry: {
		app: ['./app.js', './a.js']
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].bundle.js'
	}
}