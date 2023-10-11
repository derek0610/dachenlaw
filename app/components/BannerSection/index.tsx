// 'use client';
import React from 'react';
import GroupPhoto from '@/public/Group.png';
import BackgroundPhoto from '@/public/Background.svg';
import BlobPhoto from '@/public/RegularBlob.svg';
// import { StyledButton } from '../Button/styles';
import Button from '@mui/material/Button';
import styles from './styles.module.css';
import Image from 'next/image';
import Trail from './Trail';

const BannerSection = () => {
	return (
		<div className={styles.bannerWrapper}>
			<Image
				src={BackgroundPhoto}
				fill={true}
				style={{ transform: 'scale(1.05)', filter: 'blur(10px)' }}
				alt="banner"
			/>
			<div className={styles.contentWrapper}>
				<div className={styles.sloganWrapper}>
					<Trail>
						<span>Challenging the</span>
						<span>status quo to serve</span>
						<span>clients better</span>
					</Trail>
					<p className={styles.sloganDescription}>
						Our work is recognized by clients from around the world, and we
						firmly believe in teamwork, legal ethics, and contributing to
						society. At Dachen Law Firm, we uphold human-centric corporate
						values, which we consider the key to achieving our client&apos;
						business visions.
					</p>
					<Button variant="outlined">Know More</Button>
				</div>
				<div className={styles.lawyerWrapper}>
					<Image
						fill={true}
						src={GroupPhoto}
						style={{ objectFit: 'cover' }}
						alt="lawyers"
					/>
					<Image
						width={120}
						src={BlobPhoto}
						style={{
							position: 'absolute',
							top: 0,
							right: 0,
							filter: 'blur(10px)',
						}}
						alt="blob"
					/>
				</div>
			</div>
		</div>
	);
};

export default BannerSection;
