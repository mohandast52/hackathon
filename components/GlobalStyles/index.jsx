import { createGlobalStyle } from 'styled-components';
import { COLOR } from 'util/theme';

// const GlobalStyles = styled.div`
const GlobalStyle = createGlobalStyle`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  body,
  html {
    /* width: 100%; */
    /* height: 100%; */
    /* background: ${COLOR.WHITE}; */
    overscroll-behavior: none;
    margin: 0;
    font-family: "Josefin Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    height: 100% !important;
    width: 1170px !important;
    margin: 2rem auto !important;
  }

  .invalid-message {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }
`;

export default GlobalStyle;
