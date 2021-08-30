<!--
 * @Author: your name
 * @Date: 2021-08-30 16:08:25
 * @LastEditTime: 2021-08-30 16:36:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \uniapp-ma-template\zh-cn\console.md
-->
### <span id="console">✅ 去掉 console.log </span>

保留了测试环境和本地环境的 `console.log`

在 vue.config.js 中配置

```javascript
// 获取 VUE_APP_ENV 非 NODE_ENV，测试环境依然 console
const IS_PROD = ['production'].includes(process.env.VUE_APP_ENV)
module.exports = {
  configureWebpack: config => {
  	config.optimization.minimizer[0].options.terserOptions.compress.drop_console = IS_PROD,
  }
}
```