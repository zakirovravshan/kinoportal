import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
        scroll-behavior: smooth;
      }
      
      *,*::before, *::after {
        box-sizing: border-box;
      }
      
      body {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;
        padding: 0;
        background: rgb(106,6,6);
background: linear-gradient(90deg, rgba(106,6,6,1) 2%, rgba(2,46,102,1) 92%);
        font-family: 'Nunito Sans', sans-serif;
      }
      
      main {
        flex-grow: 1;
      }
      
      img {
        max-width: 100%;
        height: auto;
        vertical-align: middle;
        object-fit: cover;
      }
`;

export default GlobalStyle;

