import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

import { COLORS } from '../utils';

const GlobalStyle = createGlobalStyle`
  /* CSS RESET */
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Base Styles */
  :root {
    --font-family: 'Roboto', sans-serif;
    --font-family-mono: "Space Mono", monospace;
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
