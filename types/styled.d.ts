import 'styled-components';
import { ThemeType } from '../contexts/ThemeProvider';

declare module 'styled-components' {
	export interface DefaultTheme {
		name: ThemeType;
		typography: {
			fontFamily: string;
			fontFamilyMono: string;
			fontFamilyNifty: string;
			fontWeightThin: number;
			fontWeightExtraLight: number;
			fontWeightLight: number;
			fontWeightRegular: number;
			fontWeightMedium: number;
			fontWeightSemiBold: number;
			fontWeightBold: number;
			fontWeightExtraBold: number;
			fontWeightBlack: number;
		};
		colors: {
			backgroundColor: string;
			textColor: string;
			primaryColor: string;
			secondaryColor: string;
			tertiaryColor: string;
			decorativeColor: string;
			errorColor: string;
			dangerColor: string;
			warningColor: string;
			successColor: string;
			highlightColor: string;
			gray100: string;
			gray200: string;
			gray300: string;
			gray400: string;
			gray500: string;
			gray600: string;
			gray700: string;
			gray800: string;
			gray900: string;
		};
	}
}
