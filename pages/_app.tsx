import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { darkTheme, lightTheme, GlobalStyle } from '../theme';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
	const [isMounted, setIsMounted] = useState(false);
	const darkmode = useDarkMode(true);

	const theme = darkmode.value ? darkTheme : lightTheme;

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header darkmode={darkmode} />
			{isMounted && <Component {...pageProps} />}
		</ThemeProvider>
	);
}

export default MyApp;
