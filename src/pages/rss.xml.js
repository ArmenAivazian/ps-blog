import rss from '@astrojs/rss';
import { SITE_DESCRIPTION } from '../config';

export const get = () =>
	rss({
		description: SITE_DESCRIPTION,
		site: import.meta.env.SITE,
		items: import.meta.glob('./blog/**/*.{md,mdx}'),
	});
