import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  /* Colors */
  --moderateViolet:  hsl(263, 55%, 52%);
  --veryDarkGrayishBlue: hsl(217, 19%, 35%);
  --VeryDarkBlackishBlue: hsl(219, 29%, 14%);
  --White: hsl(0, 0%, 100%);

  --lightGray: hsl(0, 0%, 81%);
  --lightGrayishBlue: hsl(210, 46%, 95%);

  --attribution: hsl(228, 45%, 44%);

  /* Fonts */
  --fontSize: 13px;

}
  body {
  margin: 0;
  font-family: "Barlow Semi Condensed", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  .attribution {
    font-size: 11px;
    text-align: center;
  }
  .attribution a {
    color: var(--attribution);
  }
`;

export default GlobalStyle;
