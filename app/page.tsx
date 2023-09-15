'use client';
import { StyledContentWrapper } from './styles';
import BannerSection from './_components/BannerSection';
import FeatureSection from './_components/FeatureSection';
export default function Home() {
	return (
		<main>
			<BannerSection />
			<FeatureSection />
			<StyledContentWrapper>
				<h1>ejiwjeiw</h1>
			</StyledContentWrapper>
			<div style={{ display: 'flex', flexWrap: 'wrap', height: '1000px' }}>
				hi
			</div>
		</main>
	);
}
