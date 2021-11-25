import React from 'react';

import Header from '@components/Header';
import { DarkMode } from 'use-dark-mode';

interface Props {
	children: any;
	darkmode: DarkMode;
}

const Layout = ({ darkmode, children }: Props) => {
	return (
		<>
			<Header darkmode={darkmode} />
			<main>{children}</main>
		</>
	);
};

export default Layout;
