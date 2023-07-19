<template>
	<div class="fixed h-[72px] w-full bg-background shadow-lg dark:bg-dbackground md:px-16"></div>
	<nav class="fixed w-full p-4 px-6 md:pl-16 md:pr-32">
		<div class="flex items-center justify-between">
			<!-- Header logo -->
			<div>
				<a href="#home">
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
				<ul class="flex space-x-8 font-sans text-sm dark:text-dtext">
					<li>
						<a href="#home" class="hover:border-b-2 hover:border-text hover:pb-1 dark:hover:border-dtext">{{ $t('home') }}</a>
					</li>
					<li>
						<a href="#aboutme" class="hover:border-b-2 hover:border-text hover:pb-1 dark:hover:border-dtext">{{ $t('about') }}</a>
					</li>
					<li><a href="#support" class="hover:border-b-2 hover:border-text hover:pb-1 dark:hover:border-dtext">Support</a></li>
					<li>
						<a href="#contact" class="hover:border-b-2 hover:border-text hover:pb-1 dark:hover:border-dtext">{{ $t('contact') }}</a>
					</li>
					<div class="h-5 w-8">
						<img :src="$t('flag')" alt="flag" class="aspect-video h-full w-full" />
					</div>
					<div>
						<form>
							<select class="bg-background text-text dark:bg-dbackground dark:text-dtext" v-model="locale">
								<option value="en">{{ $t('ingles') }}</option>
								<option value="es">{{ $t('espanol') }}</option>
							</select>
						</form>
					</div>
					<!-- <li><a href="#" class="cta rounded bg-blue-500 px-3 py-2 font-semibold text-white hover:bg-blue-600">Sign Up</a></li> -->
					<li>
						<button
							class="absolute bottom-5 rounded bg-dbackground px-3 py-2 text-xs font-semibold uppercase text-dtext drop-shadow-xl transition duration-150 ease-in-out hover:scale-105 dark:bg-background dark:text-text"
							@click="toggleDark()"
						>
							{{ isDark ? $t('light') : $t('dark') }}
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
						<a href="#home" @click="isOpen = false" class="my-4 inline-block">{{ $t('home') }}</a>
					</li>
					<li>
						<a href="#aboutme" @click="isOpen = false" class="my-4 inline-block">{{ $t('about') }}</a>
					</li>
					<li><a href="#support" @click="isOpen = false" class="my-4 inline-block">Support</a></li>
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
							{{ isDark ? 'Light' : 'Dark' }}
						</button>
					</li>
				</ul>
				<div class="mt-8 flex">
					<div class="h-5 w-8">
						<img :src="$t('flag')" alt="flag" class="aspect-video h-full w-full" />
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
