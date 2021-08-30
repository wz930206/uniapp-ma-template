# uniapp-ma-template

基于 vue-cli4.0 + Webpack 4 + thorui-uni + less + 请求 封装，构建手机端模板脚手架

### Node 版本要求

本示例 Node.js 12.14.1

### 编辑器

建议使用vscode 配合 HBuilder


### 启动项目

```bash

git clone https://github.com/wz930206/uniapp-ma-template.git

cd uniapp-ma-template

npm install

npm run serve
```

- √ Vue-cli4
- [√ 配置多环境变量](#env)
- [√ thorui 组件按需加载](#thorui)
- [√ Less 全局样式](#less)
- [√ Vuex 状态管理](#vuex)
- [√ Webpack 4 vue.config.js 基础配置](#base)
- [√ 配置 alias 别名](#alias)
- [√ 配置 proxy 跨域](#proxy)
- [√ 去掉 console.log ](#console)
- [√ Eslint+Stylelint+Pettier 统一开发规范 ](#pettier)


##### 配置介绍

&emsp;&emsp;以 `VUE_APP_` 开头的变量，在代码中可以通过 `process.env.VUE_APP_` 访问。  
&emsp;&emsp;比如,`VUE_APP_ENV = 'development'` 通过`process.env.VUE_APP_ENV` 访问。  
&emsp;&emsp;除了 `VUE_APP_*` 变量之外，在你的应用代码中始终可用的还有两个特殊的变量`NODE_ENV` 和`BASE_URL`

在项目根目录中新建`.env.*`

- .env.development 本地开发环境配置

```bash
NODE_ENV='development'
# must start with VUE_APP_
VUE_APP_ENV = 'development'

```

- .env.staging 测试环境配置

```bash
NODE_ENV='production'
# must start with VUE_APP_
VUE_APP_ENV = 'staging'
```

- .env.production 正式环境配置

```bash
 NODE_ENV='production'
# must start with VUE_APP_
VUE_APP_ENV = 'production'
```

这里我们并没有定义很多变量，只定义了基础的 VUE_APP_ENV `development` `staging` `production`  
变量我们统一在 `src/config/env.*.js` 里进行管理。


#### 使用组件

项目在 `src/components/thorui` 下统一管理组件，可查看文档 [](https://thorui.cn/doc/docs/introduce.html)

[▲ 回顶部](#top)

### <span id="less">✅ Less 全局样式</span>

每个页面自己对应的样式都写在自己的 .vue 文件之中 `scoped` 它顾名思义给 css 加了一个域的概念。

```html
<style lang="less">
  /* global styles */
</style>

<style lang="less" scoped>
  /* local styles */
</style>
```

#### 目录结构

uniapp-ma-template 所有全局样式都在 `@/src/styles` 目录下设置

```bash
├── styles
│   │   ├── index.less               # 全局通用样式
│   │   ├── mixin.less               # 全局mixin
│   │   └── _variables.less           # 全局变量
```
