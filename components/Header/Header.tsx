import React from 'react';
import { DarkMode } from 'use-dark-mode';

interface Props {
	darkMode: DarkMode;
}

const Header = ({ darkMode }: Props) => {
	return (
		<div>
			<button onClick={darkMode.toggle}>Switch Theme</button>
		</div>
	);
};

export default Header;
