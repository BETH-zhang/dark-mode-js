# Dark Mode js
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Medium Badge](https://badgen.net/badge/icon/medium?icon=medium&label)](https://medium.com/@qiuge227)
[![Twitter: qiuge227](https://img.cxy227.io/twitter/follow/qiuge227.svg?style=social)](https://twitter.com/qiuge227)

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
* https/example/darkmode-js.html
* darkmode-root.html

## 📖 如何使用
dark-mode-js 非常好用，复制粘贴以下代码或者使用 npm 包引入即可使用

## 🚀 简单方法 （使用 JSDelivr CDN）
只需要在您的 HTML 页面中嵌入以下代码
```
<script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js" > </script> 
<script> 
  function addDarkmodeWidget() { 
    new Darkmode().showWidget()
  }
  window.addEventListener('load', addDarkmodeWidget) ; 
</script>
```

## 📦 使用 NPM
```
npm install dark-mode-js
```

然后添加一下 JavaScript 代码
```
import darkmode from 'dark-mode-js'
new darkmode().showWidget()
```

## ⚙️ 参数设置
```
const options = {
  
}
const darkmode = new darkmode(options)
darkmode.showWidget()
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


<!-- Badges -->
[npm-version-src]: https://img.cxy227.io/npm/v/dark-mode-js/latest.svg
[npm-version-href]: https://npmjs.com/package/dark-mode-js
[npm-downloads-src]: https://img.cxy227.io/npm/dt/dark-mode-js.svg
[npm-downloads-href]: https://npmjs.com/package/dark-mode-js
[license-src]: https://img.cxy227.io/npm/l/dark-mode-js.svg
[license-href]: ./LICENSE