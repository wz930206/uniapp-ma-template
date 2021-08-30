<!--
 * @Author: your name
 * @Date: 2021-08-30 16:08:25
 * @LastEditTime: 2021-08-30 16:35:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \uniapp-ma-template\zh-cn\base.md
-->
### <span id="base">✅ Webpack 4 vue.config.js 基础配置 </span>

```javascript
publicPath: './',
```

```javascript
const IS_PROD = ['production'].includes(process.env.NODE_ENV)

module.exports = {
    publicPath: './', // 署应用包时的基本 URL。 vue-router hash 模式使用
    lintOnSave: !IS_PROD,
    productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    devServer: {
        port: 9527, // 端口号
        open: false, // 启动后打开浏览器
        overlay: {
            //  当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
            warnings: false,
            errors: true,
        },
        // ...
    },
}
```
