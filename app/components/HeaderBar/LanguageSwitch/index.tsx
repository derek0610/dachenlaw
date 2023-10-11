'use client';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import Colors from '@colors';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const LanguageSwitch = () => {
	const [open, setOpen] = useState(false);
	const handleChange = () => setOpen((open) => !open);

	const pathName = usePathname();
	const redirectedPathName = (locale: string) => {
		if (!pathName) return '/';
		const segments = pathName.split('/');
		segments[1] = locale;
		return segments.join('/');
	};

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
				PaperProps={{
					sx: {
						width: '400px',
						color: Colors.BLACK,
						'@media screen and (max-width: 600px)': {
							width: '300px',
						},
					},
				}}
			>
				<List sx={{ padding: '100px 20px 0px' }}>
					<ListItem sx={{ padding: '12px 16px', fontWeight: 700 }}>
						Language
					</ListItem>
					<Divider sx={{ margin: '0px 0px 20px 0px' }} />
					<ListItem disablePadding>
						<ListItemButton
							component={Link}
							href={redirectedPathName('zh')}
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
							component={Link}
							href={redirectedPathName('en')}
							sx={{
								padding: '12px 16px',
								fontWeight: 500,
								color: Colors.GRAY,
								'&:hover': {
									background: 'rgba(0,0,0,0.1)',
								},
							}}
						>
							ENGLISH
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton
							component={Link}
							href={redirectedPathName('ja-JP')}
							sx={{
								padding: '12px 16px',
								fontWeight: 500,
								color: Colors.GRAY,
								'&:hover': {
									background: 'rgba(0,0,0,0.1)',
								},
							}}
						>
							にっぽんご
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
							한국어
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>
		</>
	);
};

export default LanguageSwitch;
