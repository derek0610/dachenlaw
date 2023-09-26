import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ListItemButton from '@mui/material/ListItemButton';
import styles from './styles.module.css';
import Colors from '@colors';

const Logo = () => {
	return <div className={styles.logoWrapper}>DENTONS</div>;
};

const navItems = ['News', 'About', 'Team', 'View', 'Locations'];

const HeaderBar = () => {
	// const router = useRouter();

	return (
		<React.Fragment>
			<AppBar
				sx={{
					background: 'transparent',
					backdropFilter: 'blur(10px)',
					boxShadow: 'none',
				}}
			>
				<Toolbar
					sx={{
						margin: '0px auto',
						width: '100%',
						maxWidth: '1300px',
						padding: '16px 24px',
						justifyContent: 'space-between',
					}}
				>
					<Box display="flex" alignItems="center">
						<Logo />
						<nav>
							<List sx={{ display: 'flex', marginLeft: '20px' }}>
								{navItems.map((item) => (
									<ListItem
										key={item}
										disablePadding
										// onClick={() => router.push(item)}
									>
										<ListItemButton
											sx={{
												color: Colors.GRAY,
												borderRadius: '4px',
												'&:hover': {
													color: Colors.PRIMARY,
												},
											}}
										>
											<ListItemText primary={item} />
										</ListItemButton>
									</ListItem>
								))}
							</List>
						</nav>
					</Box>
					<Button variant="outlined" disableElevation>
						Contact us!
					</Button>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
};

export default HeaderBar;