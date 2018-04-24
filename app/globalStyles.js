import { injectGlobal } from 'styled-components';
import 'sanitize.css/sanitize.css';

export const theme = {
  color: {
    pictonBlue: '#41ADDD',
  },
};

/* eslint-disable no-unused-expressions */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    line-height: 1;
    font-size: 62.5%;
    background-color: #fafafa;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.-font-loaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;
/* eslint-enable */
