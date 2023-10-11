import BannerSection from '@/app/components/BannerSection';
import FeatureSection from '@/app/components/FeatureSection';
import NewsSection from '@/app/components/NewsSection';
import TeamsSection from '@/app/components/TeamsSection';
import BuildingSection from '@/app/components/BuildingSection';
import { getDictionary, localeType } from '@dictionaries';

type HomeProps = {
	params: {
		lang: localeType;
	};
};
export default async function Home({ params: { lang } }: HomeProps) {
	const dict = await getDictionary(lang);
	return (
		<main>
			<BannerSection dict={dict} />
			<FeatureSection />
			<NewsSection />
			<TeamsSection />
			{/* <BuildingSection /> */}
		</main>
	);
}
