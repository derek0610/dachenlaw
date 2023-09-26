import BannerSection from '@/components/BannerSection';
import FeatureSection from '@/components/FeatureSection';
import NewsSection from '@/components/NewsSection';
export default function Home() {
	return (
		<main>
			<BannerSection />
			<FeatureSection />
			<NewsSection />

			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					width: '100%',
					height: '1000px',
				}}
			>
				<h1>hi~~~</h1>
			</div>
		</main>
	);
}
