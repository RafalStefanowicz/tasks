import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
* {
  margin: 0;
  padding:0;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: #000;
  }

  li {
    list-style-type: none;
  }  

  button {
    background-color: white;
  }

  button:hover {
    cursor: pointer;
  }
}

body {
  font-family: 'Lato', sans-serif;
  font-size: 25px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
}

input, textarea, button {
  font-family: inherit;
  font-size: inherit;
}
`;
