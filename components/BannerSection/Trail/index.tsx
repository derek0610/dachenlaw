'use client';
import React, { useState } from 'react';
import { useTrail, a, useInView } from '@react-spring/web';
import useMediaQuery from '@mui/material/useMediaQuery';

import styles from './styles.module.css';

const Trail = ({ children }: { children: React.ReactNode }) => {
	const [ref, inView] = useInView();
	const items = React.Children.toArray(children);
	const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

	const trail = useTrail(items.length, {
		config: { mass: 11, tension: 1200, friction: 100 },
		opacity: inView ? 1 : 0,
		x: inView ? 0 : 20,
		height: inView && isMobile ? 40 : inView ? 80 : 0,
	});

	return (
		<div ref={ref}>
			{trail.map(({ height, ...style }, index) => (
				<a.div key={index} className={styles.trailsText} style={style}>
					<a.div style={{ height }}>{items[index]}</a.div>
				</a.div>
			))}
		</div>
	);
};

export default Trail;
