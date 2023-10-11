import Image from 'next/image';
import IconButton from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';
import teamsData from './teamsData';
import styles from './styles.module.css';

const TeamsSection = () => {
	return (
		<div className={styles.teamsWrapper}>
			{teamsData.map((item: any, index: number) => (
				<div key={index}>
					<div
						className={`${styles.imageWrapper} ${
							index == 0 && styles.selfAccount
						}`}
					>
						<Image
							src={item.picture}
							width={index == 0 ? 100 : 80}
							height={index == 0 ? 100 : 80}
							style={{
								objectFit: 'contain',
								borderRadius: '50%',
							}}
							alt="lawyers picture"
						/>
						{index == 0 && (
							<IconButton
								sx={{
									padding: '2px',
									position: 'absolute',
									zIndex: 10,
									bottom: '-3px',
									right: '-3px',
									background: '#0080ff',
									color: 'white',
									border: '4px solid white',
									':hover': {
										background: 'rgba(0,128,255,0.8)',
									},
								}}
							>
								<AddIcon />
							</IconButton>
						)}
					</div>
					<div className={styles.name}>{item.name}</div>
				</div>
			))}
		</div>
	);
};

export default TeamsSection;
