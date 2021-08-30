<!--
 * @Author: your name
 * @Date: 2021-08-30 16:08:25
 * @LastEditTime: 2021-08-30 16:40:55
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \uniapp-ma-template\zh-cn\proxy.md
-->
### <span id="proxy">✅ 配置 proxy 跨域 </span>

如果你的项目需要跨域设置，你需要打来 `vue.config.js` `proxy` 注释 并且配置相应参数

```javascript
module.exports = {
  devServer: {
    // ....
    proxy: {
      '/rest': {
        target: proxyTarget,       //后端接口测试环境地址  配nginx 时使用
        changeOrigin: true,//是否允许跨越
        pathRewrite: {
          '^/rest': '/rest',      //重写 不配nginx 时使用
        }
      }
    }
  }
}
```