// import Header from '../Header';

import React from 'react';
import { DarkMode } from 'use-dark-mode';
import styled from 'styled-components';
interface Props {
	darkMode: DarkMode;
	children: JSX.Element;
}

const Layout = ({ darkMode, children }: Props) => {
	return (
		<LayoutWrapper>
			{/* <Header darkMode={darkMode} /> */}
			<PageWrapper>{children}</PageWrapper>
		</LayoutWrapper>
	);
};

const LayoutWrapper = styled.div`
	min-height: 100%;
	display: flex;
	flex-direction: column;
`;

const PageWrapper = styled.div`
	flex: 1;
`;

export default Layout;
