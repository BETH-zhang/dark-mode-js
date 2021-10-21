import { addBox, addStyle, insertTop } from "./common";
import { cssLayer } from "./common/constant";
import Widget from "./widget";

export default class DarkMode extends Widget {
  init() {
    const layer = addBox(null, null, { class: 'darkmode-layer' })
    const background = addBox(null, null, { class: 'darkmode-background' })

    insertTop(layer)
    insertTop(background)

    addStyle(cssLayer(this.options))

    this.layer = layer;
    this.time = this.options.time;
  }

  // public
  setDarkTheme() {
    console.log('暗黑模式', this.layer)
    this.layer.classList.add('darkmode-layer--expanded');
    setTimeout(() => {
      this.layer.classList.add('darkmode-layer--simple');
      this.layer.classList.add('darkmode-layer--no-transition');
    }, this.time)
  }

  // public
  setLightTheme() {
    console.log('高亮模式')
    this.layer.classList.remove('darkmode-layer--simple');
    setTimeout(() => {
      this.layer.classList.remove('darkmode-layer--no-transition');
      this.layer.classList.remove('darkmode-layer--expanded');
    }, 1)
  }
}
