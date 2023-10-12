import * as React from 'react';
import Grid from '@mui/material/Grid';
import NewsCard from '../NewsCard';
import Button from '@mui/material/Button';
import styles from './styles.module.css';

import { dictType } from '@dictionaries';

type NewsSectionProps = {
	dict: dictType;
};

const NewsSection = ({ dict }: NewsSectionProps) => {
	const newsData = [
		{
			id: 0,
			title: dict['home.news.list1.title'],
			date: 'November 15, 2021',
			description: dict['home.news.list1.description'],
		},
		{
			id: 1,
			title: dict['home.news.list2.title'],
			date: 'November 10, 2021',
			description: dict['home.news.list2.description'],
		},
		{
			id: 2,
			title: dict['home.news.list3.title'],
			date: 'November 2, 2021',
			description: dict['home.news.list3.description'],
		},
		{
			id: 3,
			title: dict['home.news.list4.title'],
			date: 'November 2, 2021',
			description: dict['home.news.list4.description'],
		},
		{
			id: 4,
			title: dict['home.news.list5.title'],
			date: 'November 2, 2021',
			description: dict['home.news.list5.description'],
		},

		{
			id: 5,
			title: dict['home.news.list6.title'],

			date: 'November 2, 2021',
			description: dict['home.news.list6.description'],
		},
	];
	return (
		<div className={styles.newsWrapper}>
			<div className={styles.contentWrapper}>
				<h2 className={styles.title}>{dict['home.news.title']}</h2>
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
