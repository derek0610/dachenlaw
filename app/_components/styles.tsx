import { styled } from '@mui/system';
import List from '@mui/material/List';
import { PRIMARY, GRAY, PRIMARY_LIGHTEN_2 } from '@constants/color';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';

const LogoWrapper = styled('div')(() => ({
	fontWeight: '700',
	padding: '8px 12px',
	background: PRIMARY,
	borderRadius: '4px',
	letterSpacing: '1.6px',
}));

const StyledList = styled(List)(() => ({
	display: 'flex',
	marginLeft: '20px',
}));

const StyledAppBar = styled(AppBar)(() => ({
	background: 'transparent',
	backdropFilter: 'blur(10px)',
	boxShadow: 'none',
}));

const StyledToolBar = styled(Toolbar)(() => ({
	margin: '0px auto',
	width: '100%',
	maxWidth: '1280px',
	padding: '16px 40px',
	justifyContent: 'space-between',
}));

const StyledListItemButton = styled(ListItemButton)(() => ({
	color: GRAY,
	borderRadius: '4px',
	'&:hover': {
		color: PRIMARY,
	},
}));

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

export {
	LogoWrapper,
	StyledList,
	StyledAppBar,
	StyledToolBar,
	StyledListItemButton,
	StyledButton,
};
