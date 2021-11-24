import type { DefaultTheme } from 'styled-components';
import { defaultTheme } from '@utils/theme/defaultTheme';

import { COLORS } from '@utils/theme/stylingConstants';

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
