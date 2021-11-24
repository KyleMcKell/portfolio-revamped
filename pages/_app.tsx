import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import useDarkMode from 'use-dark-mode';

import { darkTheme, lightTheme, GlobalStyle } from '@utils/theme';

import Layout from '@components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
	const [isMounted, setIsMounted] = React.useState(true);
	const darkmode = useDarkMode(true);
	const { value } = darkmode;
	const theme = value ? darkTheme : lightTheme;

	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{isMounted && (
				<Layout darkmode={darkmode}>
					<Component {...pageProps} />
				</Layout>
			)}
		</ThemeProvider>
	);
}

export default MyApp;
