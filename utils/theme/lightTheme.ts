import type { DefaultTheme } from 'styled-components';
import { defaultTheme } from '@utils/theme/defaultTheme';

import { COLORS } from '@utils/theme/stylingConstants';

export const lightTheme: DefaultTheme = {
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
