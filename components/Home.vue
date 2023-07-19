<template>
	<div id="home" class="container right-0 mx-64 flex h-full flex-col items-center py-20 md:flex-row md:py-32">
		<div
			class="mb-16 flex flex-col items-center text-center font-sans text-text drop-shadow-xl dark:text-dtext md:mb-0 md:w-1/2 md:items-start md:text-left lg:flex-grow"
		>
			<strong>
				<div class="pt-16 text-4xl leading-relaxed md:pt-0 md:text-4xl lg:text-6xl xl:text-7xl">
					<h1>
						<span class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Nuigurumiya </span>{{ $t('thebest') }}
					</h1>
				</div>
			</strong>
			<div class="mx-auto mt-32 grid grid-flow-row-dense grid-rows-3 gap-x-8 gap-y-8 md:grid-flow-col">
				<div v-for="item in items" :key="item.id">
					<div>
						<nuxt-link :href="item.alt" class="flex h-full w-full">
							<div class="group relative">
								<img
									:src="item.image"
									:alt="item.alt"
									class="transition-filter h-[267px] w-full rounded-lg shadow-lg duration-300 group-hover:blur-sm"
								/>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									class="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform text-dtext opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
									/>
								</svg>
							</div>
						</nuxt-link>
					</div>
					<div class="mt-4 flex">
						<nuxt-link :href="item.alt">
							<p class="font-sans text-sm font-semibold text-text hover:underline dark:text-dtext">
								{{ item.name }} {{ $t('peluchedelana') }}
							</p>
						</nuxt-link>
					</div>
					<div class="mt-2 flex items-center">
						<p class="font-sans text-2xl font-bold text-primary">{{ item.price }}</p>
						<nuxt-link :href="item.alt">
							<button
								class="ml-32 min-w-[98px] rounded-full bg-gradient-to-tr from-accent to-primary px-4 py-2 font-sans font-bold text-dtext dark:text-text"
							>
								{{ $t('buy') }}
							</button>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const items = [
	{
		id: 1,
		image: 'https://i.pinimg.com/originals/40/08/50/400850ea28341815f9b2bbfe4c25591c.jpg',
		alt: '/sage',
		name: 'Sage',
		price: '60€'
	},
	{
		id: 2,
		image: 'https://i.etsystatic.com/25121049/r/il/b4efc4/5059405825/il_fullxfull.5059405825_9j82.jpg',
		alt: '/jett',
		name: 'Jett',
		price: '60€'
	},
	{
		id: 3,
		image: 'https://i.etsystatic.com/25121049/r/il/adcd61/4742236553/il_fullxfull.4742236553_pyft.jpg',
		alt: '/neon',
		name: 'Neon',
		price: '60€'
	},
	{
		id: 4,
		image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851880757/webp/1a_medium2.webp#jpg',
		alt: '/viper',
		name: 'Viper',
		price: '60€'
	},
	{
		id: 5,
		image: 'https://i.pinimg.com/736x/d2/c7/8d/d2c78ddfca72a8f51392e020405619de.jpg',
		alt: '/omen',
		name: 'Omen',
		price: '60€'
	},
	{
		id: 6,
		image: 'https://images4-a.ravelrycache.com/uploads/Medaami/933815727/Gekko_Amigurumi_medium2.jpg',
		alt: '/geeko',
		name: 'Geeko',
		price: '60€'
	},
	{
		id: 7,
		image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851340796/webp/1a_medium2.webp#jpg',
		alt: '/killjoy',
		name: 'Killjoy',
		price: '60€'
	},
	{
		id: 8,
		image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851857044/webp/1a_medium2.webp#jpg',
		alt: '/reyna',
		name: 'Reyna',
		price: '60€'
	},
	{
		id: 9,
		image: 'https://images4-a.ravelrycache.com/uploads/Medaami/932967867/1polos_medium2.jpg',
		alt: '/brimstone',
		name: 'Brimstone',
		price: '60€'
	},
	{
		id: 10,
		image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851336260/webp/1a_medium2.webp#jpg',
		alt: '/chamber',
		name: 'Chamber',
		price: '60€'
	},
	{
		id: 11,
		image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851337896/webp/1a_medium2.webp#jpg',
		alt: '/cypher',
		name: 'Cypher',
		price: '60€'
	},
	{
		id: 12,
		image: 'https://images4-a.ravelrycache.com/uploads/Medaami/885418266/1polos__1__medium2.jpg',
		alt: '/fade',
		name: 'Fade',
		price: '60€'
	},
	{
		id: 13,
		image: 'https://images4-a.ravelrycache.com/uploads/Medaami/932971821/1polos_medium2.jpg',
		alt: '/kayo',
		name: 'Kayo',
		price: '60€'
	},
	{
		id: 14,
		image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851855574/webp/1a_medium2.webp#jpg',
		alt: '/phoenix',
		name: 'Phoenix',
		price: '60€'
	},
	{
		id: 15,
		image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851859193/webp/1a_medium2.webp#jpg',
		alt: '/raze',
		name: 'Raze',
		price: '60€'
	},
	{
		id: 16,
		image: 'https://images4-a.ravelrycache.com/uploads/Medaami/885419606/1polos__2__medium2.jpg',
		alt: '/skye',
		name: 'Skye',
		price: '60€'
	},
	{
		id: 17,
		image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851863513/webp/1a_medium2.webp#jpg',
		alt: '/sova',
		name: 'Sova',
		price: '60€'
	},
	{
		id: 18,
		image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851881949/webp/1a_medium2.webp#jpg',
		alt: '/yoru',
		name: 'Yoru',
		price: '60€'
	}
];
</script>
