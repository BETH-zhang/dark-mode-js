import { $ } from "./common";
import Widget from "./widget";

// :root {
//   --color: #0097fc;
//   --color-accent: #0097fc4f;
//   --color-bg: #333;
//   --color-bg-secondary: #555;
//   --color-link: #0097fc;
//   --color-secondary: #e20de9;
//   --color-secondary-accent: #e20de94f;
//   --color-shadow: #bbbbbb20;
//   --color-table: #0097fc;
//   --color-text: #f7f7f7;
//   --color-text-secondary: #aaa;
// }

export default class DarkModeRoot extends Widget {
  init() {
    this.setRoot()
  }

  setRoot(rootConfig, lRootConfig) {
    this.rootConfig = rootConfig ?? {
      '--color': '#0097fc',
      '--color-accent': '#0097fc4f',
      '--color-bg': '#333',
      '--color-bg-secondary': '#555',
      '--color-link': '#0097fc',
      '--color-secondary': '#e20de9',
      '--color-secondary-accent': '#e20de94f',
      '--color-shadow': '#bbbbbb20',
      '--color-table': '#0097fc',
      '--color-text': '#f7f7f7',
      '--color-text-secondary': '#aaa', 
    }
    this.lRootConfig = lRootConfig ?? {
      '--color': '#118bee',
      '--color-accent': '#118bee15',
      '--color-bg': '#fff',
      '--color-bg-secondary': '#e9e9e9',
      '--color-link': '#118bee',
      '--color-secondary': '#920de9',
      '--color-secondary-accent': '#920de90b',
      '--color-shadow': '#f4f4f4',
      '--color-table': '#118bee',
      '--color-text': '#000',
      '--color-text-secondary': '#999', 
    }
  }

  // public
  setDarkTheme() {
    console.log('暗黑模式')
    Object.keys(this.rootConfig).forEach((key) => {
      // document.documentElement.style.setProperty(key, this.rootConfig[key])
      $(':root').style.setProperty(key, this.rootConfig[key])
    })
  }

  // public
  setLightTheme() {
    console.log('高亮模式')
    Object.keys(this.lRootConfig).forEach((key) => {
      // document.documentElement.style.setProperty(key, this.lRootConfig[key])
      $(':root').style.setProperty(key, this.lRootConfig[key])
    })
  }
}
