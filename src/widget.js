import { addBtn, addStyle, getLocal, insertTop, isAllowDarkMode, IS_BROWSER, setLocal } from "./common";
import { cssBtn, defaultOptions, styleOptions } from "./common/constant";

export default class Widget {
  constructor(params) {
    if (!IS_BROWSER) {
      return;
    }

    const options = Object.assign({}, defaultOptions, styleOptions, params);
    this.options = options

    const button = addBtn(options.label, null, { class: 'darkmode-toggle--inactive' })

    insertTop(button)

    addStyle(cssBtn(options))

    this.button = button;
    this.saveInCookies = options.saveInCookies;
    this.time = options.time;

    // 手动开启
    // this.showWidget()
    this.init()
  }

  defaultTheme() {
    const darkmodeActivated = getLocal('darkmode') === 'true';
    const preferedThemeOs = this.options.autoMatchOsTheme && isAllowDarkMode
    const darkmodeNeverActivatedByAction = getLocal('darkmode') === null;

    if (
      (darkmodeActivated === true && this.options.saveInCookies) ||
      (darkmodeNeverActivatedByAction && preferedThemeOs)
    ) {
      this.button.classList.toggle('darkmode-toggle--white');
      document.body.classList.toggle('darkmode--activated'); 

      this.setDarkTheme()
    }
  }

  openDark() {
    const isDarkmode = this.isActivated();
    this.button.setAttribute('disabled', true);
    setTimeout(() => {
      this.button.removeAttribute('disabled');
    }, 1);

    this.button.classList.toggle('darkmode-toggle--white');
    document.body.classList.toggle('darkmode--activated');
    setLocal('darkmode', !isDarkmode);

    this.setDarkTheme()
  }

  closeDark() {
    const isDarkmode = this.isActivated();
    const time = parseFloat(this.time) * 1000;
    this.button.setAttribute('disabled', true);
    setTimeout(() => {
      this.button.removeAttribute('disabled');
    }, time);

    this.button.classList.toggle('darkmode-toggle--white');
    document.body.classList.toggle('darkmode--activated');
    setLocal('darkmode', !isDarkmode);

    this.setLightTheme()
  }

  showWidget() {
    if (!IS_BROWSER) {
      return;
    }
    const button = this.button;

    button.classList.add('darkmode-toggle');
    button.classList.remove('darkmode-toggle--inactive');
    button.setAttribute('aria-label', 'Activate dark mode');
    button.setAttribute('aria-checked', 'false');
    button.setAttribute('role', 'checkbox');

    button.addEventListener('click', () => {
      const isDarkmode = this.isActivated();

      if (!isDarkmode) {
        this.openDark() 
      } else {
        this.closeDark()
      }
    });
  }

  isActivated() {
    return document.body.classList.contains('darkmode--activated');
  }

  // toggle() {
  //   const layer = this.layer;
  //   const isDarkmode = this.isActivated();
  //   const button = this.button;

  //   layer.classList.toggle('darkmode-layer--simple');
  //   document.body.classList.toggle('darkmode--activated');
  //   window.localStorage.setItem('darkmode', !isDarkmode);
  //   button.setAttribute('aria-label', 'De-activate dark mode');
  //   button.setAttribute('aria-checked', 'true');
  // }

  // public
  init() {}

  // public
  setDarkTheme() {}

  // public
  setLightTheme() {}
}
