import React from 'react';
import { DarkMode } from 'use-dark-mode';

interface Props {
	darkmode: DarkMode;
}

const Header = ({ darkmode }: Props) => {
	return (
		<div>
			<button onClick={darkmode.toggle}>Switch Theme</button>
		</div>
	);
};

export default Header;
