# web-energy

> node v8.11.3

> npm 5.6.0

### 项目目录

```$xslt
├── src 源代码
  ├── api 接口请求
    ├── index.js axios 配置实例
    ├── register.js 登录接口文件
    ...
  ├── common 公共组件(注册为全局组件)
    ├── Icon 全局图标组件
    ...
  ├── commponents 布局组件
  ├── i18n 国际化
    ├── en.js 英文语言包
  ├── views 项目页面文件
    ...
  ├── vuex 状态机
    ├── regeister 登录状态模块

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
