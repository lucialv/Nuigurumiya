<template>
	<div class="fixed z-10">
		<NavBar />
	</div>
	<div class="mx-8 mt-20 h-full w-auto text-text dark:text-dtext lg:ml-20 lg:mr-20">
		<div v-if="product">
			<h1 class="mb-4 mt-4">
				<nav class="mb-4 flex" aria-label="Breadcrumb">
					<ol class="inline-flex items-center space-x-1 md:space-x-3">
						<li class="inline-flex items-center">
							<a
								href="/"
								class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-azul600 dark:text-gray-400 dark:hover:text-azul600"
							>
								<svg
									class="mr-2.5 h-3 w-3"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
									/>
								</svg>
								Home
							</a>
						</li>
						<li>
							<div class="flex items-center">
								<svg
									class="mx-1 h-3 w-3 text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 6 10"
								>
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
								</svg>
								<a
									href="/shop"
									class="ml-1 text-sm font-medium text-gray-700 hover:text-azul600 dark:text-gray-400 dark:hover:text-azul600 md:ml-2"
									>Products</a
								>
							</div>
						</li>
						<li aria-current="page">
							<div class="flex items-center">
								<svg
									class="mx-1 h-3 w-3 text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 6 10"
								>
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
								</svg>
								<span class="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ml-2">{{ product.name }}</span>
							</div>
						</li>
					</ol>
				</nav>
			</h1>
			<div class="lg:flex lg:min-w-[60%] lg:max-w-[100%]">
				<div class="flex justify-center text-center lg:justify-normal">
					<img :src="product.image" :alt="product.alt" class="max-h-[350px] min-h-fit max-w-[350px] rounded-md" />
				</div>
				<div class="mt-8 flex justify-center text-center lg:ml-12 lg:mr-12 lg:mt-0 lg:flex-none lg:text-start">
					<div v-if="$i18n.locale === 'es'">
						<h1 class="text-xl font-bold text-accent dark:text-daccent">{{ product.description }}</h1>
						<h1 class="mt-8 text-lg font-semibold">Detalles:</h1>
						<h1>Dimensiones: {{ product.dimensions }}</h1>
						<h1>Peso: {{ product.weight }}</h1>
						<h1>Material: {{ product.material }}</h1>
						<h1>Origen: {{ product.origin }}</h1>
					</div>
					<div v-else-if="$i18n.locale === 'en'">
						<h1 class="text-xl font-bold text-accent dark:text-daccent">{{ product.descriptionEn }}</h1>
						<h1 class="mt-8 text-lg font-semibold">Details:</h1>
						<h1>Dimensions: {{ product.dimensions }}</h1>
						<h1>Weight: {{ product.weight }}</h1>
						<h1>Material: {{ product.materialEn }}</h1>
						<h1>Origin: {{ product.originEn }}</h1>
					</div>
				</div>
				<div
					class="mx-auto mt-8 max-h-[250px] min-h-[250px] min-w-[250px] max-w-[250px] rounded-lg border-2 border-secondary px-4 py-4 font-semibold dark:border-dprimary lg:ml-auto lg:mr-auto lg:mt-0"
				>
					<h1 v-if="$i18n.locale === 'es'" class="text-xl">
						<p class="text-2xl font-bold text-accent dark:text-daccent">{{ product.price }}€</p>
						Entrega <span class="font-bold text-accent dark:text-daccent">GRATIS</span> para el
						<span class="font-bold text-accent dark:text-daccent">{{ day }} de {{ monthTextEs }}</span
						>.
					</h1>
					<h1 v-else-if="$i18n.locale === 'en'" class="text-xl">
						<p class="text-2xl font-bold text-accent dark:text-daccent">{{ priceEn.toFixed(2) }}$</p>
						<span class="font-bold text-accent dark:text-daccent">FREE</span> delivery for
						<span class="font-bold text-accent dark:text-daccent">{{ day }} of {{ monthTextEn }}</span
						>.
					</h1>
					<span v-if="product.stock >= 21" class="mt-4 block text-2xl text-pastelgreen"
						><span class="font-bold">{{ product.stock }}</span> {{ $t('en') }} Stock</span
					>
					<span v-else-if="product.stock <= 20 && product.stock != 0" class="mt-4 block text-2xl text-pastelred"
						><span class="font-bold">{{ product.stock }}</span> {{ $t('en') }} Stock :(</span
					>
					<span v-else-if="product.stock == 0" class="mt-4 block text-2xl font-bold text-pastelred">No Stock :/</span>
					<div class="mt-10 flex justify-between">
						<div>
							<button
								class="hover:bg-accent-hover rounded-md bg-primary px-4 py-2 font-semibold text-text dark:bg-daccent dark:text-dtext"
							>
								{{ $t('buy') }}
							</button>
						</div>
						<div>
							<button
								class="hover:bg-accent-hover rounded-md bg-primary px-4 py-2 font-semibold text-text dark:bg-daccent dark:text-dtext"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="h-6 w-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
									/>
								</svg>
							</button>
						</div>
						<div>
							<button
								class="relative px-2 py-1"
								@click="toggleLike"
								:class="{
									'animate-like-click': !isLiked,
									'text-text dark:text-dtext': isLiked
								}"
							>
								<div v-if="isLiked" class="inset-0 flex items-center justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="h-8 w-8"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
										/>
									</svg>
								</div>
								<div v-else>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8 text-pastelred">
										<path
											d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
										/>
									</svg>
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="mt-8 flex justify-center sm:mx-auto md:min-w-[30%] md:max-w-[50%] lg:ml-[400px] lg:mr-auto lg:justify-normal">
				<div v-if="$i18n.locale === 'es'">
					<h1 id="reviews" class="mt-8 text-lg font-semibold lg:text-start">{{ $t('reviews') }}</h1>

					<div class="mb-6 flex items-center">
						<svg
							class="mr-1 h-4 w-4 text-pastelyellow"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 22 20"
						>
							<path
								d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
							/>
						</svg>
						<p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">{{ calculateAverageRating(product.reviews).toFixed(1) }}</p>
						<span class="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400"></span>
						<a
							v-if="product.reviews.length >= 1"
							href="#reviews"
							class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
							>{{ product.reviews.length }} {{ $t('reviews') }}</a
						>
						<a
							v-else-if="product.reviews.length == 0"
							href="#reviews"
							class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
							>0 {{ $t('reviews') }}</a
						>
					</div>
					<article v-for="review in product.reviews" :key="review.id" class="lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px]">
						<div class="mb-4 flex items-center space-x-4">
							<img class="h-10 w-10 rounded-full" :src="`https://unavatar.io/github/${review.user}`" :alt="review.user" />
							<div class="space-y-1 font-medium dark:text-white">
								<p>
									{{ review.author }}
									<time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">{{
										review.joined
									}}</time>
								</p>
							</div>
						</div>
						<div class="mb-1 flex items-center">
							<div v-for="starIndex in 5" :key="starIndex">
								<svg
									fill="currentColor"
									class="h-6 w-6"
									:class="starIndex <= review.rating ? 'text-pastelyellow' : 'text-gray-300 dark:text-gray-500'"
								>
									<path
										d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
									/>
								</svg>
							</div>
							<h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">{{ review.frase }}</h3>
						</div>
						<p class="mb-2">
							{{ review.textoprincipal }}
						</p>
						<p v-if="readMore[review.id]" class="mb-3">{{ review.textosecundario }}</p>
						<button
							@click="toggleReadMore(review)"
							v-if="!readMore[review.id]"
							class="mb-5 block text-sm font-medium text-azul600 hover:underline dark:text-azul500"
						>
							{{ $t('readmore') }}
						</button>
						<aside>
							<p class="mt-1 text-xs text-gray-500 dark:text-gray-400">{{ review.peopleFoundHelpful }} {{ $t('peoplehelpful') }}</p>
							<div class="mt-3 flex items-center space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
								<button
									@click="addHelpful(review)"
									class="rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
								>
									{{ $t('helpful') }}
								</button>
								<a href="#" class="pl-4 text-sm font-medium text-azul600 hover:underline dark:text-azul500">{{
									$t('reportabuse')
								}}</a>
							</div>
						</aside>
						<hr class="my-4 h-1 w-auto rounded border-0 bg-gray-300 dark:bg-gray-700 md:my-10" />
					</article>
				</div>
				<div v-else-if="$i18n.locale === 'en'">
					<h1 id="reviews" class="mt-8 text-lg font-semibold lg:text-start">{{ $t('reviews') }}</h1>

					<div class="mb-6 flex items-center">
						<svg
							class="mr-1 h-4 w-4 text-pastelyellow"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 22 20"
						>
							<path
								d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
							/>
						</svg>
						<p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">{{ calculateAverageRating(product.reviews).toFixed(1) }}</p>
						<span class="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400"></span>
						<a
							v-if="product.reviews.length >= 1"
							href="#reviews"
							class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
							>{{ product.reviews.length }} {{ $t('reviews') }}</a
						>
						<a
							v-else-if="product.reviews.length == 0"
							href="#reviews"
							class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
							>0 {{ $t('reviews') }}</a
						>
					</div>
					<article v-for="review in product.reviews" :key="review.id" class="lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px]">
						<div class="mb-4 flex items-center space-x-4">
							<img class="h-10 w-10 rounded-full" :src="`https://unavatar.io/github/${review.user}`" :alt="review.user" />
							<div class="space-y-1 font-medium dark:text-white">
								<p>
									{{ review.author }}
									<time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">{{
										review.joinedEn
									}}</time>
								</p>
							</div>
						</div>
						<div class="mb-1 flex items-center">
							<div v-for="starIndex in 5" :key="starIndex">
								<svg
									fill="currentColor"
									class="h-6 w-6"
									:class="starIndex <= review.rating ? 'text-pastelyellow' : 'text-gray-300 dark:text-gray-500'"
								>
									<path
										d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
									/>
								</svg>
							</div>
							<h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">{{ review.fraseEn }}</h3>
						</div>
						<p class="mb-2">
							{{ review.textoprincipalEn }}
						</p>
						<p v-if="readMore[review.id]" class="mb-3">{{ review.textosecundarioEn }}</p>
						<button
							@click="toggleReadMore(review)"
							v-if="!readMore[review.id]"
							class="mb-5 block text-sm font-medium text-azul600 hover:underline dark:text-azul500"
						>
							{{ $t('readmore') }}
						</button>
						<aside>
							<p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
								{{ helpfulVotes[review.id] || review.peopleFoundHelpful }} {{ $t('peoplehelpful') }}
							</p>
							<div class="mt-3 flex items-center space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
								<button
									@click="addHelpful(review)"
									class="rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
								>
									{{ $t('helpful') }}
								</button>
								<a href="#" class="pl-4 text-sm font-medium text-azul600 hover:underline dark:text-azul500">{{
									$t('reportabuse')
								}}</a>
							</div>
						</aside>
						<hr class="my-4 h-1 w-auto rounded border-0 bg-gray-300 dark:bg-gray-700 md:my-10" />
					</article>
				</div>
			</div>
		</div>
	</div>
	<Footerpage />
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, reactive } from 'vue';
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
const priceEn = product.price * 1.17;
const helpfulVotes = reactive({});
const addHelpful = (review) => {
	if (!helpfulVotes[review.id]) {
		helpfulVotes[review.id] = review.peopleFoundHelpful || 0;
	}
	helpfulVotes[review.id]++;
	review.peopleFoundHelpful = helpfulVotes[review.id];
};
const isLiked = ref(true);
const readMore = ref({});
if (product.reviews && product.reviews.length > 0) {
	readMore.value = product.reviews.reduce((acc, review) => {
		acc[review.id] = review.readMore;
		return acc;
	}, {});
}

const toggleReadMore = (review) => {
	readMore.value[review.id] = !readMore.value[review.id];
};

const toggleLike = () => {
	isLiked.value = !isLiked.value;
};
const calculateAverageRating = (reviews) => {
	if (!reviews || reviews.length === 0) {
		return 0;
	}

	const totalRatings = reviews.reduce((sum, review) => sum + review.rating, 0);
	const averageRating = totalRatings / reviews.length;

	return averageRating;
};
</script>
<style>
@keyframes likeAnimationClick {
	0% {
		transform: scale(1);
	}
	25% {
		transform: scale(1.4);
	}
	75% {
		transform: scale(0.9);
	}
	100% {
		transform: scale(1);
	}
}

.animate-like-click {
	animation: likeAnimationClick 0.6s;
	animation-fill-mode: both;
}
</style>
