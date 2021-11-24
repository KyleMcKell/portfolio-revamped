import { DefaultTheme } from 'styled-components';
import { defaultTheme } from './defaultTheme';

import { COLORS } from './stylingConstants';

export const darkTheme: DefaultTheme = {
	name: 'light',
	colors: {
		...defaultTheme.colors,
		backgroundColor: COLORS.OFF_WHITE,
		textColor: COLORS.OFF_BLACK,
	},
	typography: {
		...defaultTheme.typography,
	},
};
