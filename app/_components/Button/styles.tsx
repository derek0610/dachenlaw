import Button from '@mui/material/Button';
import { PRIMARY, GRAY, PRIMARY_LIGHTEN_2 } from '@constants/color';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(() => ({
	color: PRIMARY,
	border: `2px solid ${PRIMARY}`,
	borderRadius: '8px',
	fontWeight: 900,
	padding: '12px 14px',
	'&:hover': {
		background: PRIMARY_LIGHTEN_2,
		color: 'white',
		border: `2px solid ${PRIMARY_LIGHTEN_2}`,
	},
}));

export { StyledButton };
