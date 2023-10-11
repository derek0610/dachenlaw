import 'server-only';

export type localeType = 'en' | 'zh' | 'ja-JP';

const dictionaries = {
	en: () => import('@/dictionaries/en.json').then((module) => module.default),
	zh: () => import('@/dictionaries/zh.json').then((module) => module.default),
	'ja-JP': () =>
		import('@/dictionaries/ja-JP.json').then((module) => module.default),
};

export const getDictionary = async (locale: localeType) =>
	dictionaries[locale]();

export type dictType = { [key: string]: string };
