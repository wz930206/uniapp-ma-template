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