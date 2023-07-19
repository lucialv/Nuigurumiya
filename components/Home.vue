<template>
	<div id="home" class="container mx-auto flex h-full items-center py-20 md:flex-row md:py-32">
		<div class="mb-16 flex flex-col items-center text-center font-sans text-text drop-shadow-xl dark:text-dtext md:mb-0 lg:flex-grow">
			<strong>
				<div class="pt-16 text-center text-4xl leading-relaxed md:pt-0 md:text-4xl lg:text-6xl xl:text-7xl">
					<h1>
						<span class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Nuigurumiya </span>{{ $t('thebest') }}
					</h1>
				</div>
			</strong>
			<div class="mt-32 grid grid-flow-row gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
				<div v-for="item in items" :key="item.id">
					<div>
						<nuxt-link :to="`/products/${item.id}`" class="flex h-full w-full">
							<div class="group relative">
								<div class="aspect-w-1 aspect-h-1 max-w-[267px]">
									<!-- Added max-width for mobile -->
									<img
										:src="item.image"
										:alt="item.alt"
										draggable="false"
										class="transition-filter h-full w-full rounded-lg object-cover shadow-sm duration-300 group-hover:blur-sm"
									/>
								</div>
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
						<nuxt-link :to="`/products/${item.id}`">
							<p class="font-sans text-sm font-semibold text-text hover:underline dark:text-dtext">
								{{ $t('peluchedelana') }} {{ item.name }}
							</p>
						</nuxt-link>
					</div>
					<div class="mt-2 flex items-center justify-between">
						<p class="font-sans text-2xl font-bold text-accent">{{ item.price }}</p>
						<nuxt-link :to="`/products/${item.id}`">
							<button
								class="min-w-[98px] rounded-2xl bg-gradient-to-tr from-accent to-primary px-4 py-2 font-sans font-bold text-dtext dark:text-text"
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
import { items } from '~/products.js';
</script>
