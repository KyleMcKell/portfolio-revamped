import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import useDarkMode from 'use-dark-mode';

import { darkTheme, lightTheme, GlobalStyle } from '../theme';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
	const [isMounted, setIsMounted] = React.useState(false);
	const darkMode = useDarkMode(true);
	const { value } = darkMode;
	const theme = value ? darkTheme : lightTheme;

	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{isMounted && (
				<Layout darkMode={darkMode}>
					<Component {...pageProps} />
				</Layout>
			)}
		</ThemeProvider>
	);
}

export default MyApp;
