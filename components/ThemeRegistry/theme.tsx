import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import Colors from './colors';

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
});

const theme = createTheme({
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
	components: {
		MuiAlert: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					...(ownerState.severity === 'info' && {
						backgroundColor: '#60a5fa',
					}),
				}),
			},
		},
		MuiButton: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					...(ownerState.variant === 'outlined' && {
						color: Colors.PRIMARY,
						border: `2px solid ${Colors.PRIMARY}`,
						borderRadius: '8px',
						fontWeight: 900,
						padding: '12px 14px',
						'&:hover': {
							background: Colors.PRIMARY_LIGHTEN_2,
							color: 'white',
							border: `2px solid ${Colors.PRIMARY_LIGHTEN_2}`,
						},
					}),
				}),
			},
		},
	},
});

export default theme;
