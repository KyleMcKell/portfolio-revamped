import { DefaultTheme } from 'styled-components';

import { WEIGHTS, COLORS } from './stylingConstants';

export const lightTheme: DefaultTheme = {
	name: 'light',
	typography: {
		fontFamily: 'Roboto, Arial, Helvetica, -apple-system, sans-serif',
		fontFamilyMono: 'Space Mono, monospace',
		fontFamilyNifty: 'Sriracha, cursive',
		fontWeightLight: WEIGHTS.LIGHT,
		fontWeightMedium: WEIGHTS.MEDIUM,
		fontWeightBold: WEIGHTS.BOLD,
	},
	colors: {
		backgroundColor: COLORS.OFF_WHITE,
		textColor: COLORS.OFF_BLACK,
		primaryColor: COLORS.PRIMARY,
		secondaryColor: COLORS.SECONDARY,
		tertiaryColor: COLORS.TERTIARY,
		decorativeColor: COLORS.DECORATIVE,
		errorColor: COLORS.ERROR,
		dangerColor: COLORS.DANGER,
		warningColor: COLORS.WARNING,
		successColor: COLORS.SUCCESS,
		highlightColor: COLORS.HIGHLIGHT,
		gray100: COLORS.GRAY[100],
		gray200: COLORS.GRAY[200],
		gray300: COLORS.GRAY[300],
		gray400: COLORS.GRAY[400],
		gray700: COLORS.GRAY[700],
		gray800: COLORS.GRAY[800],
		gray900: COLORS.GRAY[900],
	},
};
