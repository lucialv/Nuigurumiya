// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
	i18n: {
		vueI18n: './i18n.config.ts',
		detectBrowserLanguage: {
			useCookie: true,
			alwaysRedirect: true,
			cookieCrossOrigin: true
		} // if you are using custom path, default
	},
	colorMode: {
		preference: 'dark', // default value of the color mode
		classSuffix: '', // optional, default value: ''
		storageKey: 'nuxt-color-mode' // optional, default value: 'color-mode'
	},
	app: {
		head: {
			title: 'Nuigurumiya',
			htmlAttrs: { lang: 'en' },
			link: [{ rel: 'canonical', href: 'https://nuigurumiya.mishu.dev' }],
			meta: [
				{
					'http-equiv': 'Cache-Control',
					content: '1y'
				},
				{ 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
				{ 'http-equiv': 'Expires', content: '1y' },
				{ 'http-equiv': 'Pragma', content: '1y' },
				{ name: 'apple-mobile-web-app-capable', content: 'yes' },
				{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
				{ name: 'apple-mobile-web-app-title', content: 'Lucía Álvarez' },
				{ name: 'application-name', content: 'Lucía Álvarez' },
				{ name: 'audience', content: 'all' },
				{ name: 'author', content: 'Lucía Álvarez, mishudiscord@gmail.com' },
				{ name: 'coverage', content: 'Worldwide' },
				{ name: 'theme-color', content: '##5F2DD2' },
				{
					name: 'description',
					content: 'Nuigurumiya, the best plushies at your fingertips.'
				},
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1, maximum-scale=5'
				},
				{ name: 'designer', content: 'Lucía Álvarez, mishudiscord@gmail.com' },
				{ name: 'distribution', content: 'Global' },
				{ name: 'googlebot', content: 'index,follow' },
				{ name: 'HandheldFriendly', content: 'True' },
				{ name: 'identifier-URL', content: 'https://nuigurumiya.mishu.dev' },
				{
					name: 'keywords',
					content: 'mishu, Lucía Álvarez Portfolio, Lucía Álvarez, Lucía Portfolio, mishu portfolio'
				},
				{ name: 'msapplication-config', content: '/browserconfig.xml' },
				{ name: 'msapplication-TileColor', content: '#5F2DD2' },
				{ name: 'owner', content: 'Lucía Álvarez, mishudiscord@gmail.com' },
				{ name: 'rating', content: 'safe for kids' },
				{ name: 'reply-to', content: 'mishudiscord@gmail.com' },
				{ name: 'revisit-after', content: '7 days' },
				{
					name: 'robots',
					content: 'archive,follow,imageindex,index,odp,snippet,translate'
				},
				{ name: 'shortlink', content: 'https://nuigurumiya.mishu.dev' },
				{
					name: 'subject',
					content: 'Nuigurumiya, the best plushies at your fingertips.'
				},
				{
					name: 'summary',
					content: 'Nuigurumiya, the best plushies at your fingertips.'
				},
				{ name: 'url', content: 'https://nuigurumiya.mishu.dev' },
				{
					property: 'og:description',
					content: 'Nuigurumiya, the best plushies at your fingertips.'
				},
				{ property: 'og:email', content: 'mishudiscord@gmail.com' },
				{ property: 'og:locale', content: 'en_US' },
				{ property: 'og:site_name', content: 'Lucía Álvarez' },
				{ property: 'og:title', content: 'Nuigurumiya the best plushies' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:url', content: 'https://nuigurumiya.mishu.dev' },
				{ property: 'og:image', content: 'https://cdn.discordapp.com/attachments/1112295866510868553/1131540090598998087/image.png' },
				{ property: 'icon', content: 'https://www.citypng.com/public/uploads/preview/-41603422078wgu1oobdb9.png' }
			]
		}
	}
});
