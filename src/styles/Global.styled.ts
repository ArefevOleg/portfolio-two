import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';
import { Media } from '../components/media/Media';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 10px;
}

body {
  margin: 0;
  font-family: "Fira Code", monospace, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.2;
  color: ${theme.colors.colorGray};
  font-size: 16px;
  background-color: ${theme.colors.bgColorDark};
  min-width: 360px;
}



ul {
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: ${theme.colors.colorGray};
}


&::selection {
  --color-shadow: #000000;
  color: ${theme.colors.accentWhite};
  background-color: ${theme.colors.accentGreen};
  text-shadow:
    1px 0 1px var(--color-shadow),
    0 1px 1px var(--color-shadow),
    2px 1px 1px var(--color-shadow),
    1px 2px 1px var(--color-shadow),
    3px 2px 1px var(--color-shadow),
    2px 3px 1px var(--color-shadow);
}
`
