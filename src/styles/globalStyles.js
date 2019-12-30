import { createGlobalStyle } from 'styled-components';

export const minSupportedWidth = 1024;
export const maxSupportedWidth = 1366;

let { innerWidth } = window;
if (innerWidth < minSupportedWidth) {
  innerWidth = minSupportedWidth;
} else if (innerWidth > maxSupportedWidth) {
  innerWidth = maxSupportedWidth;
}
export const scaleFactor = innerWidth / 1366;

const GlobalStyle = createGlobalStyle`
  body, html {
    font-family: Arial;
    background-color: ${props => props.theme.color.base_90};
    color: ${props => props.theme.color.base_20};
    font-size: ${props => props.theme.dim._14px};
    margin: 0;
    height: 100%;
    scrollbar-width: none !important;
  }

  * {
    outline: none;
  }

  #root {
    height: 100%;
    min-width: ${minSupportedWidth}px;
    justify-content: center;
    position: relative;
  }

  .loaderContainer {
    background: ${props => props.theme.color.transparent};
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .loaderWrapper {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .loader {
    color: ${props => props.theme.color.tomato};;
    font-size: ${props => props.theme.dim._8px};
    width: 1em;
    height: 1em;
    border-radius: 50%;
    text-indent: -9999em;
    -webkit-animation: load4 1.3s infinite linear;
    animation: load4 1.3s infinite linear;

  }
  
  // font ---------------
.header40 {
  font-size: ${props => props.theme.dim._40px};
  font-weight: normal;
  line-height: 1.2;
  letter-spacing: normal;
  font-family: inherit;
}

.header28 {
  font-size: ${props => props.theme.dim._28px};
  font-weight: normal;
  line-height: 40px;
  letter-spacing: normal;
  font-family: inherit;
}

.header24 {
  font-size: ${props => props.theme.dim._24px};
  font-weight: normal;
  line-height: 1.17;
  letter-spacing: normal;
  font-family: inherit;
}

.header12 {
  font-size: ${props => props.theme.dim._12px};
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: ${props => props.theme.dim._scale(0.24)};
  font-family: inherit;
}

.header16 {
  font-size: ${props => props.theme.dim._16px};
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: normal;
  font-family: inherit;
}

.header14 {
  font-size: ${props => props.theme.dim._14px};
  font-weight: 600;
  line-height: normal;
  letter-spacing: normal;
  font-family: inherit;
}

.title14 {
  font-size: ${props => props.theme.dim._14px};
  font-weight: normal;
  line-height: 40px;
  letter-spacing: normal;
  font-family: inherit;
}

.titleBold14 {
  font-size: ${props => props.theme.dim._14px};
  font-weight: bold;
  line-height: 40px;
  letter-spacing: normal;
  font-family: inherit;
}

.title18 {
  font-size: ${props => props.theme.dim._18px};
  font-weight: normal;
  line-height: 40px;
  letter-spacing: normal;
  font-family: inherit;
}

.note12 {
  font-size: ${props => props.theme.dim._12px};
  font-weight: normal;
  line-height: 40px;
  letter-spacing: normal;
  font-family: inherit;
}


.note14 {
  font-size: ${props => props.theme.dim._14px};
  font-weight: normal;
  line-height: 24px;
  letter-spacing: normal;
  font-family: inherit;
}

.noteBold14 {
  font-size: ${props => props.theme.dim._14px};
  font-weight: 600;
  line-height: 24px;
  letter-spacing: normal;
  font-family: inherit;
}

.textNormal12 {
  font-size:  ${props => props.theme.dim._12px};
  font-weight: normal;
  line-height: 16px;
  letter-spacing: normal;
  font-family: inherit;
}

.text12 {
  font-size:  ${props => props.theme.dim._12px};
  font-weight: normal;
  line-height: 20px;
  letter-spacing: normal;
  font-family: inherit;
}

.textBold12 {
  font-size:  ${props => props.theme.dim._12px};
  font-weight: 600;
  line-height: 20px;
  letter-spacing: normal;
  font-family: inherit;
}

.textNormal14 {
  font-size:  ${props => props.theme.dim._14px};
  font-weight: normal;
  line-height: 16px;
  letter-spacing: normal;
  font-family: inherit;
}

.textBold14 {
  font-size: ${props => props.theme.dim._14px};
  font-weight: 600;
  line-height: 1.43;
  letter-spacing: normal;
  font-family: inherit;
}

.text14 {
  font-size:  ${props => props.theme.dim._14px};
  font-weight: normal;
  line-height: 20px;
  letter-spacing: normal;
  font-family: inherit;
}

.textNormal16 {
  font-size:  ${props => props.theme.dim._16px};
  font-weight: normal;
  line-height: 20px;
  letter-spacing: normal;
  font-family: inherit;
}

.text16 {
  font-size:  ${props => props.theme.dim._16px};
  font-weight: normal;
  line-height: 40px;
  letter-spacing: normal;
  font-family: inherit;
}

.textBold16 {
  font-size:  ${props => props.theme.dim._16px};
  font-weight: 600;
  line-height: 40px;
  letter-spacing: normal;
  font-family: inherit;
}

`;

export default GlobalStyle;