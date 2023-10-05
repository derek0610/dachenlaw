import * as React from 'react';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

import styles from './styles.module.css';
import Colors from '@colors';

const LinkData = [
	{
		title: 'News',
		children: [
			{ title: 'Office activities' },
			{ title: 'Public service activities' },
			{ title: 'Honor' },
		],
	},
	{
		title: 'About',
		children: [
			{ title: 'Understanding the office' },
			{ title: 'Overview' },
			{ title: 'Multi-center and diversification' },
			{ title: 'Outstanding lawyers worldwide' },
			{ title: 'Exploration and Innovation' },
		],
	},
	{
		title: 'Team',
		children: [{ title: 'Professional Team' }, { title: 'Business Areas' }],
	},
	{
		title: 'View',
		children: [
			{ title: 'Perspective' },
			{ title: 'Latest Updates' },
			{ title: 'Published Books' },
		],
	},
	{
		title: 'Locations',
		children: [{ title: 'Contact' }, { title: 'Talent Recruitment' }],
	},
	{
		title: 'Others',
		children: [
			{ title: 'Legal Disclaimer' },
			{ title: 'Cookie Usage' },
			{ title: 'Privacy Policy' },
			{ title: 'Terms of Use' },
		],
	},
];

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<Grid container>
					{LinkData.map((item, index) => (
						<Grid
							key={index}
							xs={6}
							sm={4}
							md={3}
							lg={2}
							item
							textAlign="center"
						>
							<ListItemButton
								sx={{
									fontWeight: 700,
									fontSize: 14,
									color: Colors.GRAY,
									borderRadius: '4px',
									'&:hover': {
										color: Colors.PRIMARY,
									},
								}}
							>
								{item.title}
							</ListItemButton>
							{item.children.map((innerItem, innerIndex) => (
								<ListItemButton
									key={innerIndex}
									sx={{
										fontSize: 14,
										color: Colors.GRAY,
										borderRadius: '4px',
										'&:hover': {
											color: Colors.PRIMARY,
										},
										'@media screen and (max-width: 600px) ': {
											fontSize: 12,
										},
									}}
								>
									{innerItem.title}
								</ListItemButton>
							))}
						</Grid>
					))}
				</Grid>
				<Divider sx={{ margin: '20px 0px' }} />
				<div className={styles.extraContainer}>
					<Typography sx={{ color: 'gray', fontSize: 14 }}>
						Copyright © 2020 DENTONS TAIWAN LAW FIRM. All rights reserved.
					</Typography>
					<div>
						<IconButton sx={{ ':hover': { color: 'purple' } }}>
							<LinkedInIcon />
						</IconButton>
						<IconButton sx={{ ':hover': { color: 'purple' } }}>
							<EmailIcon />
						</IconButton>
						<IconButton sx={{ ':hover': { color: 'purple' } }}>
							<FacebookIcon />
						</IconButton>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
