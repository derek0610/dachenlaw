import * as React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ListItemButton from '@mui/material/ListItemButton';
import styles from './styles.module.css';
import LanguageSwitch from './LanguageSwitch';
import Colors from '@colors';
import { dictType } from '@dictionaries';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

const Logo = () => {
	return (
		<Link href="/" className={styles.logoWrapper}>
			DENTONS
		</Link>
	);
};

const navItems = ['News', 'About', 'Team', 'View', 'Locations'];

type HeaderBarProps = {
	dict: dictType;
};

const HeaderBar = ({ dict }: HeaderBarProps) => {
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
						height: '84.5px',
						margin: '0px auto',
						width: '100%',
						maxWidth: '1300px',
						padding: '16px 24px',
						justifyContent: 'space-between',
					}}
				>
					<div className={styles.leftContainer}>
						<Logo />
						<nav>
							<List sx={{ display: 'flex', marginLeft: '20px' }} disablePadding>
								{navItems.map((item) => (
									<ListItem key={item} disablePadding>
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
					</div>
					<div>
						<LanguageSwitch />
						<Button
							variant="outlined"
							disableElevation
							sx={{
								'@media screen and (max-width: 800px)': {
									display: 'none',
								},
							}}
						>
							{dict['button.contactUs']}
						</Button>
						<IconButton
							sx={{
								color: Colors.PRIMARY,
								'@media screen and (min-width: 800px)': {
									display: 'none',
								},
							}}
						>
							<MenuIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
};

export default HeaderBar;
