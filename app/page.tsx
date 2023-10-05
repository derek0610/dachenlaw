import BannerSection from '@/components/BannerSection';
import FeatureSection from '@/components/FeatureSection';
import NewsSection from '@/components/NewsSection';
import TeamsSection from '@/components/TeamsSection';
import BuildingSection from '@/components/BuildingSection';
export default function Home() {
	return (
		<main>
			<BannerSection />
			<FeatureSection />
			<NewsSection />
			<TeamsSection />
			{/* <BuildingSection /> */}
			{/* <div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					width: '100%',
					height: '1000px',
				}}
			>
				<h1>hi~~~</h1>
			</div> */}
		</main>
	);
}
