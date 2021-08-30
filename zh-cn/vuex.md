<!--
 * @Author: your name
 * @Date: 2021-08-30 16:08:25
 * @LastEditTime: 2021-08-30 16:42:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \uniapp-ma-template\zh-cn\vuex.md
-->
### <span id="vuex">✅ Vuex 状态管理</span>

目录结构

```bash
├── store
│   ├── modules
│   │   └── user.js
│   ├── index.js
│   ├── getters.js
```

`main.js` 引入

```javascript
import Vue from 'vue'
import App from './App.vue'
import store from './store'
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
```