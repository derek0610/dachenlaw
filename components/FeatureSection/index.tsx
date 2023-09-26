import IconGrow from '@/public/IconGrow.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from 'next/image';
import IconProtect from '@/public/IconProtect.png';
import IconOperate from '@/public/IconOperate.png';
import IconFinance from '@/public/IconFinance.png';
import styles from './styles.module.css';

const FeatureSection = () => {
	return (
		<div className={styles.featureWrapper}>
			<div className={styles.contentWrapper}>
				<h2 className={styles.title}>Our Offer</h2>

				<p className={styles.description}>
					Across over 80 countries, Dentons helps you grow, protect, operate and
					finance your organization by providing uniquely global and deeply
					local legal solutions.
				</p>

				<Grid container spacing={3}>
					<Grid lg={3} xs={12} item>
						<Box display="flex" flexDirection="column" alignItems="center">
							<Image
								src={IconGrow}
								width={120}
								height={120}
								style={{
									filter: 'drop-shadow(0px 16px 60px #9947c6) opacity(80%)',
								}}
								alt="Grow Icon"
							/>
							<h3 className={styles.featureTitle}>Grow</h3>
							<p className={styles.featureDescription}>
								Dentons can provide the legal and advisory solutions you need to
								grow, anywhere in the world you need us.
							</p>
						</Box>
					</Grid>
					<Grid lg={3} xs={12} item>
						<Box display="flex" flexDirection="column" alignItems="center">
							<Image
								src={IconProtect}
								width={120}
								height={120}
								style={{
									filter: 'drop-shadow(0px 16px 60px #9947c6) opacity(80%)',
								}}
								alt="Protect Icon"
							/>

							<h3 className={styles.featureTitle}>Protect</h3>
							<p className={styles.featureDescription}>
								Dentons can provide the legal and advisory solutions you need to
								grow, anywhere in the world you need us.
							</p>
						</Box>
					</Grid>
					<Grid lg={3} xs={12} item>
						<Box display="flex" flexDirection="column" alignItems="center">
							<Image
								src={IconOperate}
								width={120}
								height={120}
								style={{
									filter: 'drop-shadow(0px 16px 60px #9947c6) opacity(80%)',
								}}
								alt="Operate Icon"
							/>
							<h3 className={styles.featureTitle}>Operate</h3>
							<p className={styles.featureDescription}>
								Dentons can provide the legal and advisory solutions you need to
								grow, anywhere in the world you need us.
							</p>
						</Box>
					</Grid>
					<Grid lg={3} xs={12} item>
						<Box display="flex" flexDirection="column" alignItems="center">
							<Image
								src={IconFinance}
								width={120}
								height={120}
								style={{
									filter: 'drop-shadow(0px 16px 60px #9947c6) opacity(80%)',
								}}
								alt="Finance Icon"
							/>
							<h3 className={styles.featureTitle}>Finance</h3>
							<p className={styles.featureDescription}>
								Dentons can provide the legal and advisory solutions you need to
								grow, anywhere in the world you need us.
							</p>
						</Box>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default FeatureSection;
