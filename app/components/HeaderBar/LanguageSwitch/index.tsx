'use client';
import { useState } from 'react';
import styles from './styles.module.css';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import Colors from '@colors';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
const LanguageSwitch = () => {
	const [open, setOpen] = useState(false);
	const handleChange = () => setOpen((open) => !open);
	return (
		<>
			<IconButton
				onClick={handleChange}
				sx={{ color: Colors.PRIMARY, marginRight: '20px' }}
			>
				<LanguageIcon />
			</IconButton>
			<Drawer
				anchor="right"
				open={open}
				onClose={handleChange}
				PaperProps={{ sx: { width: '400px', color: Colors.BLACK } }}
			>
				<List sx={{ padding: '100px 20px 0px' }}>
					<ListItem sx={{ padding: '12px 16px', fontWeight: 700 }}>
						Language
					</ListItem>
					<Divider sx={{ margin: '0px 0px 20px 0px' }} />
					<ListItem disablePadding>
						<ListItemButton
							sx={{
								padding: '12px 16px',
								fontWeight: 500,
								color: Colors.GRAY,
								'&:hover': {
									background: 'rgba(0,0,0,0.1)',
								},
							}}
						>
							中文
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton
							sx={{
								padding: '12px 16px',
								fontWeight: 500,
								color: Colors.GRAY,
								'&:hover': {
									background: 'rgba(0,0,0,0.1)',
								},
							}}
						>
							English
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton
							sx={{
								padding: '12px 16px',
								fontWeight: 500,
								color: Colors.GRAY,
								'&:hover': {
									background: 'rgba(0,0,0,0.1)',
								},
							}}
						>
							JAPANESE
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton
							sx={{
								padding: '12px 16px',
								fontWeight: 500,
								color: Colors.GRAY,
								'&:hover': {
									background: 'rgba(0,0,0,0.1)',
								},
							}}
						>
							Korean
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>
		</>
	);
};

export default LanguageSwitch;
