const NORD_PALETTE = {
	nord0: 'hsl(220, 16%, 22%)',
	nord1: 'hsl(220, 16%, 27%)',
	nord2: 'hsl(220, 16%, 32%)',
	nord3: 'hsl(220, 16%, 36%)',
	nord4: 'hsl(220, 27%, 88%)',
	nord5: 'hsl(220, 27%, 92%)',
	nord6: 'hsl(220, 27%, 94%)',
	nord7: 'hsl(179, 25%, 65%)',
	nord8: 'hsl(193, 43%, 67%)',
	nord9: 'hsl(210, 34%, 63%)',
	nord10: 'hsl(213, 32%, 52%)',
	nord11: 'hsl(354, 42%, 56%)',
	nord12: 'hsl(14, 51%, 63%)',
	nord13: 'hsl(40, 71%, 73%)',
	nord14: 'hsl(92, 28%, 65%)',
	nord15: 'hsl(311, 20%, 63%)',
};

export const COLORS = {
	OFF_WHITE: 'hsl(220, 27%, 96%)',
	OFF_BLACK: 'hsl(220, 16%, 16%)',
	GRAY: {
		100: NORD_PALETTE.nord0,
		200: NORD_PALETTE.nord1,
		300: NORD_PALETTE.nord2,
		400: NORD_PALETTE.nord3,
		700: NORD_PALETTE.nord4,
		800: NORD_PALETTE.nord5,
		900: NORD_PALETTE.nord6,
	},
	PRIMARY: NORD_PALETTE.nord8,
	SECONDARY: NORD_PALETTE.nord7,
	TERTIARY: NORD_PALETTE.nord9,
	DECORATIVE: NORD_PALETTE.nord10,
	ERROR: NORD_PALETTE.nord11,
	DANGER: NORD_PALETTE.nord12,
	WARNING: NORD_PALETTE.nord13,
	SUCCESS: NORD_PALETTE.nord14,
	HIGHLIGHT: NORD_PALETTE.nord15,
};

export const WEIGHTS = {
	BOLD: 700,
	MEDIUM: 500,
	LIGHT: 400,
};
