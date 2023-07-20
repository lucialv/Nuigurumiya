<template>
	<div class="z-10">
		<NavBar />
	</div>
	<div class="ml-8 mr-8 mt-20 h-full w-full text-text dark:text-dtext md:ml-20 md:mr-20">
		<div v-if="product">
			<h1 class="mb-8">
				<Nuxt-link to="/shop" class="underline">Shop</Nuxt-link> > <Nuxt-Link to="#">{{ product.name }}</Nuxt-Link>
			</h1>
			<div class="md:flex">
				<div class="flex justify-center text-center md:justify-normal">
					<img :src="product.image" :alt="product.alt" class="h-[350px] w-[350px]" />
				</div>
				<div class="md:ml-12">
					<p>{{ product.name }}</p>
				</div>
				<div class="font-semibold md:ml-20">
					<p class="fonnt-bold text-accent">{{ product.price }}</p>
					<p v-if="$i18n.locale === 'es'">
						Entrega <span class="font-bold text-accent">GRATIS</span> para el
						<span class="font-bold text-accent">{{ day }} de {{ monthTextEs }}</span
						>.
					</p>
					<p v-else-if="$i18n.locale === 'en'">
						<span class="font-bold text-accent">FREE</span> delivery for
						<span class="font-bold text-accent">{{ day }} of {{ monthTextEn }}</span
						>.
					</p>
					<!-- <p class="mt-4">
						{{ product.description }}
					</p> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { items } from '~/products.js';
const route = useRoute();
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 2);
const day = tomorrow.getDate();
const monthTextEs = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(tomorrow);
const monthTextEn = new Intl.DateTimeFormat('en-EN', { month: 'long' }).format(tomorrow);
const productId = parseInt(route.params.productId);
const product = items.find((item) => item.id === productId);
if (!product) {
	throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
}
</script>
