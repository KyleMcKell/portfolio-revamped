import { darkTheme, lightTheme, GlobalStyle } from '@utils/theme/index';
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';

interface Props {
	children: any;
}

const Providers = ({ children }: Props) => {
	const [isMounted, setIsMounted] = useState(true);
	const darkmode = useDarkMode(true);
	const { value } = darkmode;
	const [theme, setTheme] = useState(value ? darkTheme : lightTheme);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		setTheme(value ? lightTheme : darkTheme);
	}, [value]);

	const body = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

	if (!isMounted) {
		return <div style={{ visibility: 'hidden' }}>{body}</div>;
	}

	return body;
};

export default Providers;
