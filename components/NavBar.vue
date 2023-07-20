<template>
	<div class="fixed h-[72px] w-full bg-background shadow-lg dark:bg-dbackground md:px-16"></div>
	<nav class="fixed w-full p-4 px-6 md:pl-16 md:pr-32">
		<div class="flex items-center justify-between">
			<!-- Header logo -->
			<div>
				<a href="/">
					<Tailwind />
				</a>
			</div>

			<!-- Mobile toggle -->
			<div class="md:hidden">
				<button id="drawer" aria-label="drawer" @click="drawer">
					<svg
						class="fill-current absolute right-9 top-4 h-10 w-10 rounded-md bg-opacity-40 text-text dark:text-dtext"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</div>

			<!-- Navbar -->
			<div class="hidden md:inline-block">
				<ul class="flex space-x-8 font-sans text-sm font-semibold dark:text-dtext">
					<li>
						<a
							href="/"
							class="hover:border-b-2 hover:border-azul600 hover:pb-1 hover:text-azul500 dark:hover:border-azul600 dark:hover:text-azul500"
							>{{ $t('home') }}</a
						>
					</li>
					<li>
						<a
							href="#aboutme"
							class="hover:border-b-2 hover:border-azul600 hover:pb-1 hover:text-azul500 dark:hover:border-azul600 dark:hover:text-azul500"
							>{{ $t('about') }}</a
						>
					</li>
					<li>
						<a
							href="/shop"
							class="hover:border-b-2 hover:border-azul600 hover:pb-1 hover:text-azul500 dark:hover:border-azul600 dark:hover:text-azul500"
							>{{ $t('shop') }}</a
						>
					</li>
					<li>
						<a
							href="#contact"
							class="hover:border-b-2 hover:border-azul600 hover:pb-1 hover:text-azul500 dark:hover:border-azul600 dark:hover:text-azul500"
							>{{ $t('contact') }}</a
						>
					</li>
					<li class="flex items-center space-x-1">
						<!-- Bandera -->
						<div class="h-5 w-8">
							<img :src="$t('flag')" alt="flag" draggable="false" class="aspect-video h-full w-full" />
						</div>

						<!-- Menú de opciones de idioma -->
						<div>
							<form>
								<select
									class="bg-background text-text hover:text-azul500 dark:bg-dbackground dark:text-dtext dark:hover:text-azul600"
									v-model="locale"
								>
									<option value="en">{{ $t('ingles') }}</option>
									<option value="es">{{ $t('espanol') }}</option>
								</select>
							</form>
						</div>
					</li>

					<!-- <li><a href="#" class="cta rounded bg-blue-500 px-3 py-2 font-semibold text-white hover:bg-blue-600">Sign Up</a></li> -->
					<li>
						<button
							class="absolute bottom-5 rounded bg-dbackground px-3 py-2 text-xs font-semibold uppercase text-dtext drop-shadow-xl transition duration-150 ease-in-out hover:scale-105 dark:bg-background dark:text-text"
							@click="toggleDark()"
						>
							<svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
								<path
									d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
								/>
							</svg>
							<svg v-else-if="!isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
								<path
									fill-rule="evenodd"
									d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
					</li>
				</ul>
			</div>

			<!-- Dark Background Transition -->
			<transition
				enter-class="opacity-0"
				enter-active-class="ease-out transition-medium"
				enter-to-class="opacity-100"
				leave-class="opacity-100"
				leave-active-class="ease-out transition-medium"
				leave-to-class="opacity-0"
			>
				<div @keydown.esc="isOpen = false" v-show="isOpen" class="fixed inset-0 z-10 transition-opacity">
					<div @click="isOpen = false" class="bg-black absolute inset-0 opacity-40" tabindex="0"></div>
				</div>
			</transition>

			<!-- Drawer Menu -->
			<aside
				class="fixed left-0 top-0 z-30 h-full w-64 transform overflow-auto bg-background p-5 text-text transition-all duration-300 ease-in-out dark:bg-dbackground dark:text-dtext"
				:class="isOpen ? 'translate-x-0' : '-translate-x-full'"
			>
				<span @click="isOpen = false" class="flex items-center justify-center border-b p-4">
					<Tailwind />
				</span>

				<ul class="divide-y font-sans">
					<li>
						<a href="/" @click="isOpen = false" class="my-4 inline-block">{{ $t('home') }}</a>
					</li>
					<li>
						<a href="/#aboutme" @click="isOpen = false" class="my-4 inline-block">{{ $t('about') }}</a>
					</li>
					<li>
						<a href="/shop" @click="isOpen = false" class="my-4 inline-block">{{ $t('shop') }}</a>
					</li>
					<li>
						<a href="#contact" @click="isOpen = false" class="my-4 inline-block">{{ $t('contact') }}</a>
					</li>

					<li>
						<!-- <a
							href="#"
							@click="isOpen = false"
							class="cta my-8 inline-block w-full rounded bg-blue-500 px-3 py-2 text-center font-semibold text-white hover:bg-blue-600"
							>Sign Up</a
						> -->
						<button
							class="absolute right-[100px] top-[400px] rounded bg-dbackground px-3 py-2 text-xs font-semibold uppercase text-dtext drop-shadow-xl transition duration-150 ease-in-out hover:scale-105 dark:bg-background dark:text-text"
							@click="toggleDark()"
						>
							<svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
								<path
									d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
								/>
							</svg>
							<svg v-else-if="!isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
								<path
									fill-rule="evenodd"
									d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
					</li>
				</ul>
				<div class="mt-8 flex">
					<div class="h-5 w-8">
						<img :src="$t('flag')" alt="flag" draggable="false" class="aspect-video h-full w-full" loading="lazu" />
					</div>
					<div class="ml-2">
						<form>
							<select class="bg-background text-text dark:bg-dbackground dark:text-dtext" v-model="locale">
								<option value="en">{{ $t('ingles') }}</option>
								<option value="es">{{ $t('espanol') }}</option>
							</select>
						</form>
					</div>
				</div>
			</aside>
		</div>
	</nav>
</template>

<script lang="js">
export default {
	data() {
		return {
			isOpen: false
		};
	},
	methods: {
		drawer() {
			this.isOpen = !this.isOpen;
		}
	},
	watch: {
		isOpen: {
			immediate: true,
			handler(isOpen) {
				if (process.client) {
					if (isOpen) document.body.style.setProperty('overflow', 'hidden');
					else document.body.style.removeProperty('overflow');
				}
			}
		}
	},
	mounted() {
		document.addEventListener('keydown', (e) => {
			if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
		});
	}
};
</script>

<script setup lang="js">
import {useDark, useToggle } from '@vueuse/core'
const { locale } = useI18n();
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
