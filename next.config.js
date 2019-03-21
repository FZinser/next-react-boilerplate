const withStylus = require('@zeit/next-stylus')
const nib = require('nib')
const rupture = require('rupture')
const poststylus = require('poststylus')
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin")
var criticalOptions = {
	inline: true,
	width: 1300,
	height: 900,
	minify: true,
	extract: true,
	timeout: 30000,
	pathPrefix: '/src',
	ignore: ['font-face'],
	ignoreOptions: {}
}

module.exports = Object.assign(
	{},
 	{
 		webpack: function (config, {}) {
 			config.plugins.push(
 				new HtmlCriticalWebpackPlugin({
 				      base: path.resolve(__dirname, 'out'),
 				      src: path.resolve(__dirname, 'index.html'),
 				      dest: path.resolve(__dirname, 'index.html'),
 				      inline: true,
 				      minify: true,
 				      extract: true,
 				      width: 1200,
 				      height: 900,
 				      penthouse: {
 				        blockJSRequests: false,
 				      }
			    })
 			)
 			return config
 		}
 	},
	withStylus({
		stylusLoaderOptions: {
			use: [
				nib(),
				rupture(),
				poststylus([
					require('postcss-css-variables'),
				])
 	 		]
 		}
 	}),
 	{
 		exportPathMap: function () {
 			return {
 		    	'/zinserificador': { page: '/zinserificador' },
 		    	'/aragnificador': { page: '/aragnificador' },
 		    	'/nayarificador': { page: '/nayarificador' }
 		    }
 		}
 	}
)