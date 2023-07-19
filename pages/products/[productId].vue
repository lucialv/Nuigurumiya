<template>
	<div>
		<div v-if="product">
			<h1>{{ product.name }}</h1>
			<img :src="product.image" :alt="product.alt" />
			<p>{{ product.price }}</p>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { items } from '~/products.js';
const route = useRoute();
const productId = parseInt(route.params.productId);

const product = items.find((item) => item.id === productId);
if (!product) {
	throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
}
</script>
