import Grid from '@mui/material/Grid';
import Image from 'next/image';

import styles from './styles.module.css';
const NewsCard = ({ cardData }) => {
	return (
		<Grid item xs={12} sm={6} md={6} lg={4}>
			<div className={styles.cardWrapper}>
				<div className={styles.imageWrapper}>
					<Image
						src={`https://picsum.photos/id/${Math.floor(
							Math.random() * 50
						)}/300/200`}
						fill={true}
						alt="news photo"
					/>
				</div>
				<div className={styles.contentWrapper}>
					<time className={styles.time} dateTime={cardData.date}>
						{cardData.date}
					</time>
					<h3 className={styles.title}>{cardData.title}</h3>
					<p className={styles.description}>{cardData.description}</p>
				</div>
			</div>
		</Grid>
	);
};

export default NewsCard;
