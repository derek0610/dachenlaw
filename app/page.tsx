import BannerSection from '@/app/components/BannerSection';
import FeatureSection from '@/app/components/FeatureSection';
import NewsSection from '@/app/components/NewsSection';
import TeamsSection from '@/app/components/TeamsSection';
import BuildingSection from '@/app/components/BuildingSection';
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
