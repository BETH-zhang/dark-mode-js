// 参考：https://juejin.cn/post/6905926398037196813
// filter: invert(1) hue-rotate(180deg);
import { $, addStyle } from "./common";
import Widget from "./widget";

export default class DarkHue extends Widget {
  init() {
    this.css = `
      .darkmode--activated img {
        filter: invert(1) hue-rotate(180deg)
      }
      .darkmode--activated .no-mode {
        filter: invert(1) hue-rotate(180deg)
      }
    `
    addStyle(this.css)
  }

  // public
  setDarkTheme() {
    console.log('暗黑模式')
    $(':root').style.setProperty('filter', 'invert(1) hue-rotate(180deg)')
  }

  // public
  setLightTheme() {
    console.log('高亮模式')
    $(':root').style.setProperty('filter', '')
  }
}
