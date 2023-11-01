import { createGlobalStyle, css } from 'styled-components';

export const defaultBoxShadow = css`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const darkerBoxShadow = css`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const GlobalStyles = createGlobalStyle`
  :root {
    --black-color: #000;
    --white-color: #fff;
    --red-color: #fa1e3f;
    --light-gray: #f2f2f2;
    --dark-gray-color: #333;
    --default-text-size: 12px;
  }
`;

export default GlobalStyles;
