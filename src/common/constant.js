  export const defaultOptions = {
    label: '',
    saveInCookies: true,
    autoMatchOsTheme: true
  }
  
  export const styleOptions = {
    bottom: '32px',
    right: '32px',
    left: 'unset',

    time: '0.3s',

    mixColor: '#fff',
    backgroundColor: '#fff',

    buttonColorDark: '#100f2c',
    buttonColorLight: '#fff',
  }

  export const cssLayer = (options) => `
    .darkmode-layer {
      position: fixed;
      pointer-events: none;
      background: ${options.mixColor};
      transition: all ${options.time} ease;
      mix-blend-mode: difference;
    }

    .darkmode-layer--simple {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: scale(1);
    }

    .darkmode-layer--expanded {
      transform: scale(100);
      border-radius: 0;
    }

    .darkmode-layer--no-transition {
      transition: none;
    }

    .darkmode-background {
      background: ${options.backgroundColor};
      position: fixed;
      pointer-events: none;
      z-index: -10;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    img, .darkmode-ignore {
      isolation: isolate;
      display: inline-block;
    }

    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
      .darkmode-toggle {display: none !important}
    }

    @supports (-ms-ime-align:auto), (-ms-accelerator:true) {
      .darkmode-toggle {display: none !important}
    }
  `;

export const cssBtn = (options) => `
  .darkmode-layer--button {
    width: 2.9rem;
    height: 2.9rem;
    border-radius: 50%;
    right: ${options.right};
    bottom: ${options.bottom};
    left: ${options.left};
  }

  .darkmode-toggle {
    background: ${options.buttonColorDark};
    width: 3rem;
    height: 3rem;
    position: fixed;
    border-radius: 50%;
    border:none;
    right: ${options.right};
    bottom: ${options.bottom};
    left: ${options.left};
    cursor: pointer;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .darkmode-toggle--white {
    background: ${options.buttonColorLight};
  }

  .darkmode-toggle--inactive {
    display: none;
  }
`