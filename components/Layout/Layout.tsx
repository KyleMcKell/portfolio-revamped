import Header from '../Header';

import React from 'react';
import { DarkMode } from 'use-dark-mode';

interface Props {
	darkMode: DarkMode;
	children: any;
}

const Layout = ({ darkMode, children }: Props) => {
	return (
		<>
			<Header darkMode={darkMode} />
			{children}
		</>
	);
};

export default Layout;
