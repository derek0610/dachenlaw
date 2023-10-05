'use client';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import NewsCard from '../NewsCard';
import Button from '@mui/material/Button';
import styles from './styles.module.css';

const newsData = [
	{
		id: 0,
		title:
			'Blockchain: an insider’s perspective on the evolution of the technology',
		date: 'November 15, 2021',
		description:
			"valuable insight shared on this key technology trend with an insider's perspective provided by John Crain, CEO and Founder of digital art marketplace SuperRare Labs. This podcast reflects on the current state of blockchain and what the future holds, including its impact on use cases, NFTs, and art/digital art.",
	},
	{
		id: 1,
		title: 'Ransomware, random demands and determining whether to pay',
		date: 'November 10, 2021',
		description:
			'There is an increase in the number of cases in this area – so considering the industries that have been effected by the increase, when to involve your cybersecurity insurance provider and factors that could guide your business in determining whether to pay or not pay the ransom demands is both topical and useful.',
	},
	{
		id: 2,
		title:
			'Climate change litigation update: Challenge to coal seam gas project approval dismissed',
		date: 'November 2, 2021',
		description:
			' This decision is yet another example of the growing body of climate change litigation in Australia. It demonstrates the obligations of consent authorities to thoroughly consider the Scope 1, Scope 2 and Scope 3 greenhouse gas emissions of mining projects and the compatibility of the project with State and national policies targeting climate change.',
	},
	{
		id: 2,
		title:
			'Climate change litigation update: Challenge to coal seam gas project approval dismissed',
		date: 'November 2, 2021',
		description:
			' This decision is yet another example of the growing body of climate change litigation in Australia. It demonstrates the obligations of consent authorities to thoroughly consider the Scope 1, Scope 2 and Scope 3 greenhouse gas emissions of mining projects and the compatibility of the project with State and national policies targeting climate change.',
	},
	{
		id: 2,
		title:
			'Climate change litigation update: Challenge to coal seam gas project approval dismissed',
		date: 'November 2, 2021',
		description:
			' This decision is yet another example of the growing body of climate change litigation in Australia. It demonstrates the obligations of consent authorities to thoroughly consider the Scope 1, Scope 2 and Scope 3 greenhouse gas emissions of mining projects and the compatibility of the project with State and national policies targeting climate change.',
	},
	{
		id: 2,
		title:
			'Climate change litigation update: Challenge to coal seam gas project approval dismissed',
		date: 'November 2, 2021',
		description:
			' This decision is yet another example of the growing body of climate change litigation in Australia. It demonstrates the obligations of consent authorities to thoroughly consider the Scope 1, Scope 2 and Scope 3 greenhouse gas emissions of mining projects and the compatibility of the project with State and national policies targeting climate change.',
	},
];

const NewsSection = () => {
	return (
		<div className={styles.newsWrapper}>
			<div className={styles.contentWrapper}>
				{/* <h2 className={styles.title}>Featured Insights</h2> */}
				<Grid container spacing={4}>
					{newsData.map((item, index) => (
						<NewsCard cardData={item} key={index} />
					))}
				</Grid>
				<Button sx={{ margin: '40px 0px 0px auto' }}>Read more</Button>
			</div>
		</div>
	);
};

export default NewsSection;
