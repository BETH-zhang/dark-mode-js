# Dark Mode js
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
![jsdelivr downloads][jsdelivr-downloads-href]
![License][license-href]
[![twitter-href][twitter-href]](https://twitter.com/qiuge227)

## 😊 项目介绍
为你的网站快速添加暗黑模式

该库使用 CSS min-blend-mode 和 :root 两种方式 将暗黑模式带入您的任何网站。您只需要复制一点代码到您的项目中，
您将获得一个用来打开和关闭暗黑模式的小工具。该工具是轻量的，还默认使用本地存储，因此您设置的状态会被浏览器记住！

我参考的项目是：https://github.com/sandoche/Darkmode.js
之所以又写了一个，是因为，我再使用 darkmode-js 进行测试的时候，无法覆盖所有的项目

## 🔧 功能点
* 小工具自动出现
* 保存用户选择
* 如果操作系统首选主题是深色，自动显示深色模式（如果浏览器支持prefers-color-scheme）
* 可以不引入小工具的情况下编写函数引用

## ✨ 演示
* [css]: https://beth-zhang.github.io/dark-mode-js/example/darkmode-js.html
* [:root]: https://beth-zhang.github.io/dark-mode-js/example/darkmode-root.html

## 📖 如何使用
dark-mode-js 非常好用，复制粘贴以下代码或者使用 npm 包引入即可使用

## 🚀 简单方法 （使用 JSDelivr CDN）
只需要在您的 HTML 页面中嵌入以下代码
### 第一种方式，默认通过 css min-blend-mode
* 优点
  * 不需要任何额外配置和修改
* 缺点
  * 展现上有一定的瑕疵，尤其在某些 hover 的时候，个别地方颜色可能会没有对比度没有区分的很完善
```html
<script src="https://cdn.jsdelivr.net/npm/@cxy227/dark-mode-js@0.1.2/dist/index.js" > </script> 
<script>
  function init() {
      console.log('darkModeJs: ', darkModeJs)
      const Widget = darkModeJs.darkMode
      const darkmode = new Widget()

      darkmode.showWidget()
      darkmode.defaultTheme()
  }

  window.addEventListener('load', init);
</script>
```
### 第二种方式，通过设置 :root 全局变量，维护一组变量集合
* 优点
  * 效果更好，可以自定义部分内容颜色
* 缺点
  * 需要添加配置，全局设置跟着 :root 的变量集走
```html
<script src="https://cdn.jsdelivr.net/npm/@cxy227/dark-mode-js@0.1.2/dist/index.js" > </script> 
<script>
  function init() {
      console.log('darkModeJs: ', darkModeJs)
      const Widget = darkModeJs.darkMode
      const darkmode = new Widget()

      darkmode.showWidget()
      darkmode.defaultTheme()
  }

  window.addEventListener('load', init);
</script>
```

## 📦 使用 NPM
```javascript
npm install dark-mode-js
```

然后添加一下 JavaScript 代码
```javascript
import darkModeJs from '@cxy227/dark-mode-js'
const Widget = darkModeJs.darkMode
const darkmode = new Widget()

darkmode.showWidget()
darkmode.defaultTheme()
```

## ⚙️ 参数设置
```javascript
const options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}
```

## 🎹 浏览器兼容性
在此处检查兼容性：
● https://caniuse.com/#search=mix-blend-mode
● https://caniuse.com/#search=prefers-color-scheme（自动激活暗模式）

## 🧰 开发测试
● npm start

## 📄 证书（License）
[MIT License](./LICENSE)

Copyright (c) beth

## 参考
查找各种 emoji 图表：https://emojipedia.org/first-quarter-moon/
查找各种 徽章：https://shields.io/


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@cxy227/dark-mode-js
[npm-version-href]: https://npmjs.com/package/@cxy227/dark-mode-js
[npm-downloads-src]: https://img.shields.io/npm/dw/@cxy227/dark-mode-js
[npm-downloads-href]: https://npmjs.com/package/@cxy227/dark-mode-js
[license-src]: https://img.cxy227.io/npm/l/@cxy227/dark-mode-js.svg
[license-href]: https://img.shields.io/badge/license-MIT-green
[jsdelivr-downloads-href]: https://img.shields.io/jsdelivr/gh/hy/cxy227/dark-mode-js
[twitter-href]: https://img.shields.io/twitter/url?label=qiuge227&style=social&url=https%3A%2F%2Ftwitter.com%2Fqiuge227