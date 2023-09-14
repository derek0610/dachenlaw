'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {
	LogoWrapper,
	StyledList,
	StyledAppBar,
	StyledToolBar,
	StyledListItemButton,
	StyledButton,
} from './styles';
import { PRIMARY } from '@constants/color';

const Logo = () => {
	return <LogoWrapper>DENTONS</LogoWrapper>;
};

const navItems = ['News', 'About', 'Team', 'View', 'Locations'];

const HeaderBar = () => {
	const router = useRouter();

	return (
		<React.Fragment>
			<StyledAppBar>
				<StyledToolBar>
					<Box display="flex" alignItems="center">
						<Logo />
						<nav>
							<StyledList sx={{ display: 'flex' }}>
								{navItems.map((item) => (
									<ListItem
										key={item}
										disablePadding
										onClick={() => router.push(item)}
									>
										<StyledListItemButton>
											<ListItemText primary={item} />
										</StyledListItemButton>
									</ListItem>
								))}
							</StyledList>
						</nav>
					</Box>
					<StyledButton variant="outlined" disableElevation>
						Contact us!
					</StyledButton>
				</StyledToolBar>
			</StyledAppBar>
		</React.Fragment>
	);
};

export default HeaderBar;
