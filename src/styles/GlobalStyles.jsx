import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
     font-family: 'DungGeunMo';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
        font-size: 14px;
    }
  body {
    font-family: 'DungGeunMo', 'Noto Sans KR', sans-serif;
    color: #323232;
    background-color: #c0c0c0;
  }
 input::placeholder,
    select::placeholder,
    textarea::placeholder {
        color: #A5B7C7;
        font-style: italic;
        text-align: center;
    }

    select:focus,
    input:focus,
    textarea:focus {
        outline: none;
        border: 1px solid #2E3192 !important;
        background: #f4f5ff !important;
    }

    input[type='text'] {
        padding: 5px 3px 5px 3px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #B4B4B4;
    }
  button {
    border-radius: 0%;
    background-color: #c0c0c0;
    color: black;
    padding: 0 10px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul,li {
    list-style: none;
  }
  img {
    max-width: calc(100vw - 10px);
    
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    vertical-align: middle;
    word-break: break-all;
    white-space: pre-wrap;
    width: 100%;
    background-color: #fff;
    td,th {
      border: 1px solid #3e3e3e;
      padding: 5px 6px;
    }

    thead {
      background-color: rgb(246, 246, 249);
    }

     tr {
            position: relative;
            height: 50px;
            border-bottom: 1px solid #DDDDDD;
            /* 짝수번째 테이블만 background-color 지정 */
            &:nth-child(2n) {
                background-color: #F6F6F9;
            }

            &:hover {
                background-color: #fcfcfc;
            }
  }
}
`;
