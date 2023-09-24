const path = require('path'),
webpack = require("webpack"),
settings = require('./settings'),

ExtractTextPlugin = require("extract-text-webpack-plugin"),


BrowserSyncPlugin = require('browser-sync-webpack-plugin');




module.exports = {
	mode: 'development',
	devtool: 'source-map',
 // context: settings.themeLocation,
	entry: {
		App: settings.themeLocation + "src/js/app.js"  
	},
	output: {
		path: path.resolve(__dirname, settings.themeLocation + "dist"),
		filename: 'app.js'
	},
	
  
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
				    fallback: 'style-loader',
				    use: ['css-loader']
				})
			 },
			{
		      test: /\.(woff|woff2|ttf|otf|eot|svg)$/,
		      exclude: /node_modules/,
		      loader: 'url-loader',
		      options: {
		      	outputPath: '//besestudio.com/' + settings.themeLocation + 'fonts/',
		        publicPath: 'dist/',
		        name: 'fonts/[name].[ext]',
		        limit: 1000
		      }
		    },

			{
			  test: /\.(gif|png|jpe?g|svg)$/i,
			  use: [
			  	{
			  		loader: 'file-loader',
			  		options: {
			  			name: "[name].[ext]",
				      	outputPath: '//besestudio.com/' + settings.themeLocation +  'img/',
				      	publicPath: 'img/',
			  		}
			  	},
			    {
			      loader: 'image-webpack-loader',
			    },
			  ],
			},

			{ test: /modernizr/,
            loader: 'imports-loader?this=>window!exports-loader?window.Modernizr' }
		]
	},
	plugins: [
	
		/*new webpack.ProvidePlugin({
		  $: 'jquery',
		  jQuery: 'jquery',
		  'window.jQuery': 'jquery'
		}),*/
		new BrowserSyncPlugin({
		  files: '**/*.php',
		  proxy: 'http://besestudio.com',
		  injectChanges: true
		}),
		new ExtractTextPlugin({filename: "../style.css"})
	],
	
};
