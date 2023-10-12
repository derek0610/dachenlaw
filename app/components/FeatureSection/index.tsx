import IconGrow from '@/public/IconGrow.png';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import IconProtect from '@/public/IconProtect.png';
import IconOperate from '@/public/IconOperate.png';
import IconFinance from '@/public/IconFinance.png';
import styles from './styles.module.css';
import { dictType } from '@dictionaries';

type FeatureSectionProps = {
	dict: dictType;
};

const FeatureSection = ({ dict }: FeatureSectionProps) => {
	return (
		<div className={styles.featureWrapper}>
			<div className={styles.contentWrapper}>
				<h2 className={styles.title}>{dict['home.feature.title']}</h2>

				<p className={styles.description}>{dict['home.feature.description']}</p>

				<Grid container spacing={3}>
					<Grid lg={3} xs={12} item>
						<div className={styles.container}>
							<Image
								src={IconGrow}
								width={120}
								height={120}
								style={{
									filter: 'drop-shadow(0px 16px 60px #9947c6) opacity(80%)',
								}}
								alt="Grow Icon"
							/>
							<h3 className={styles.featureTitle}>
								{dict['home.feature.list1.title']}
							</h3>
							<p className={styles.featureDescription}>
								{dict['home.feature.list1.description']}
							</p>
						</div>
					</Grid>
					<Grid lg={3} xs={12} item>
						<div className={styles.container}>
							<Image
								src={IconProtect}
								width={120}
								height={120}
								style={{
									filter: 'drop-shadow(0px 16px 60px #9947c6) opacity(80%)',
								}}
								alt="Protect Icon"
							/>

							<h3 className={styles.featureTitle}>
								{dict['home.feature.list2.title']}
							</h3>
							<p className={styles.featureDescription}>
								{dict['home.feature.list2.description']}
							</p>
						</div>
					</Grid>
					<Grid lg={3} xs={12} item>
						<div className={styles.container}>
							<Image
								src={IconOperate}
								width={120}
								height={120}
								style={{
									filter: 'drop-shadow(0px 16px 60px #9947c6) opacity(80%)',
								}}
								alt="Operate Icon"
							/>
							<h3 className={styles.featureTitle}>
								{dict['home.feature.list3.title']}
							</h3>
							<p className={styles.featureDescription}>
								{dict['home.feature.list3.description']}
							</p>
						</div>
					</Grid>
					<Grid lg={3} xs={12} item>
						<div className={styles.container}>
							<Image
								src={IconFinance}
								width={120}
								height={120}
								style={{
									filter: 'drop-shadow(0px 16px 60px #9947c6) opacity(80%)',
								}}
								alt="Finance Icon"
							/>
							<h3 className={styles.featureTitle}>
								{dict['home.feature.list4.title']}
							</h3>
							<p className={styles.featureDescription}>
								{dict['home.feature.list4.description']}
							</p>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default FeatureSection;
