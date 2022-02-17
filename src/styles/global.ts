import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding: 0;
  box-sizing: border-box;

}
html{
    @media(max-width: 1080px) {
        font-size: 93.75%; //15px
    }
    @media(max-width: 720px) {
        font-size: 87.5%; //14px
    }
}

:root{

  --write:#FFFFFF;
  --write-50: #EFEFEF;
  --gray:#969696;

  --black:#000000;

    --orange:#ED8E53;

    --red:#EF3C3C;
}

body{
  background-color: var(--write-50);
  font-family: 'Roboto',sans-serif;
  -webkit-font-smoothing: antialiased;

}

button{
  border: 0;
  cursor: pointer;

}
`;
