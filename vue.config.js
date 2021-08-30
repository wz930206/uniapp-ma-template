const path = require('path')
const resolve = dir => path.join(__dirname, dir)
// page title
const name = 'uni app template'
// 生产环境，测试和正式
const IS_PROD = ['production'].includes(process.env.NODE_ENV)
const devServerPort = 9527

module.exports = {
	lintOnSave: !IS_PROD,
	productionSourceMap: false,

	devServer: {
		port: devServerPort,
		open: false,
		overlay: {
			warnings: false,
			errors: true
		},
		// proxy: {
		//   [process.env.VUE_APP_BASE_API]: {
		//     target: `http://localhost:${mockServerPort}/mock-api/v1`,
		//     changeOrigin: true, // needed for virtual hosted sites
		//     ws: true, // proxy websockets
		//     pathRewrite: {
		//       ['^' + process.env.VUE_APP_BASE_API]: ''
		//     }
		//   }
		// }
	},
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: [
				path.resolve(__dirname, 'src/styles/_variables.less'),
				path.resolve(__dirname, 'src/styles/_mixins.less'),
				path.resolve(__dirname, 'src/styles/_class_template.less'),
			]
		}
	},
	configureWebpack: config => {
		config.optimization.minimizer[0].options.terserOptions.compress.drop_console = IS_PROD,
			config.externals = {
				name: name,
				resolve: {
					alias: {
						'@': resolve('src')
					}
				}
			}
	}
}
