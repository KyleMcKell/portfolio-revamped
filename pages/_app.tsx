import type { AppProps } from 'next/app';
import { useLayoutEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyle } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
	const [isMounted, setIsMounted] = useState(false);
	const [theme, setTheme] = useState(darkTheme);

	const toggleTheme = () => {
		setTheme(theme.name === 'dark' ? lightTheme : darkTheme);
	};

	useLayoutEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<button onClick={toggleTheme}>Switch Theme</button>
			{isMounted && <Component {...pageProps} />}
		</ThemeProvider>
	);
}

export default MyApp;
