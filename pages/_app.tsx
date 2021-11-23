import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

import { COLORS, WEIGHTS } from '../utils';

const GlobalStyle = createGlobalStyle`
  /* CSS RESET */
    /*
    1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }
  /*
    3. Allow percentage-based heights in the application
  */
  html, body {
    height: 100%;
  }
  /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  /*
    6. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /*
    7. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }
  /*
    8. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  /*
    9. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }

  /* Base Styles */
  :root {
    --font-family: 'Roboto', Arial, Helvetica, -apple-system, sans-serif;
    --font-family-mono: 'Space Mono', monospace;
    --font-family-nifty: 'Sriracha', cursive;
    --font-weight-bold: 700;
    --font-weight-medium: 500;
    --font-weight-light: 400;
    --color-background: ${COLORS.BLACK};
    --color-text: ${COLORS.WHITE};
    --color-primary: ${COLORS.PRIMARY};
    --color-secondary: ${COLORS.SECONDARY};
    --color-tertiary: ${COLORS.TERTIARY};
    --color-decorative: ${COLORS.DECORATIVE};
    --color-error: ${COLORS.ERROR};
    --color-danger: ${COLORS.DANGER};
    --color-warning: ${COLORS.WARNING};
    --color-success: ${COLORS.SUCCESS};
    --color-highlight: ${COLORS.HIGHLIGHT};
    --color-gray-100: ${COLORS.GRAY[100]};
    --color-gray-200: ${COLORS.GRAY[200]};
    --color-gray-300: ${COLORS.GRAY[300]};
    --color-gray-400: ${COLORS.GRAY[400]};
    --color-gray-700: ${COLORS.GRAY[700]};
    --color-gray-800: ${COLORS.GRAY[800]};
    --color-gray-900: ${COLORS.GRAY[900]}
  }
  html {
    font-family: var(--font-family);
    color: var(--color-text);
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
