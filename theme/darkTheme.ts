import { DefaultTheme } from 'styled-components';
import { defaultTheme } from './defaultTheme';

import { COLORS } from './stylingConstants';

export const darkTheme: DefaultTheme = {
	name: 'dark',
	colors: {
		...defaultTheme.colors,
		backgroundColor: COLORS.OFF_BLACK,
		textColor: COLORS.OFF_WHITE,
	},
	typography: {
		...defaultTheme.typography,
	},
};
