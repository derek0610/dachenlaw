import { styled } from '@mui/system';
import List from '@mui/material/List';
import { PRIMARY, GRAY } from '@constants/color';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ListItemButton from '@mui/material/ListItemButton';

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
	maxWidth: '1300px',
	padding: '16px 24px',
	justifyContent: 'space-between',
}));

const StyledListItemButton = styled(ListItemButton)(() => ({
	color: GRAY,
	borderRadius: '4px',
	'&:hover': {
		color: PRIMARY,
	},
}));

export {
	LogoWrapper,
	StyledList,
	StyledAppBar,
	StyledToolBar,
	StyledListItemButton,
};
