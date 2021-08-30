<!--
 * @Author: your name
 * @Date: 2021-08-30 16:08:25
 * @LastEditTime: 2021-08-30 16:35:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \uniapp-ma-template\zh-cn\alias.md
-->
### <span id="alias">✅ 配置 alias 别名 </span>

```javascript
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
  }
}
```