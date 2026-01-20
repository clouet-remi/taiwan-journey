
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about-us" | "/accommodations" | "/activities" | "/our-schools";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about-us": Record<string, never>;
			"/accommodations": Record<string, never>;
			"/activities": Record<string, never>;
			"/our-schools": Record<string, never>
		};
		Pathname(): "/" | "/about-us" | "/about-us/" | "/accommodations" | "/accommodations/" | "/activities" | "/activities/" | "/our-schools" | "/our-schools/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/css/reset.css" | "/css/styles.css" | "/favicon.svg" | "/img/accommodations/hsinchu-loft.webp" | "/img/accommodations/kaohsiung-seaview.webp" | "/img/accommodations/sun-moon-lake-cabin.webp" | "/img/accommodations/taichung-condo.webp" | "/img/accommodations/taipei-studio.webp" | "/img/accommodations/taitung-house.webp" | "/img/accommodations/tamsui-riverside.webp" | "/img/accommodations/xinyi-apartment.webp" | "/img/accommodations/yilan-villa.webp" | "/img/activities/boat-festival.webp" | "/img/activities/concert.webp" | "/img/activities/cooking-food.webp" | "/img/activities/food-experience.webp" | "/img/activities/glamping.webp" | "/img/activities/hiking-taiwan.webp" | "/img/activities/hot-spring.webp" | "/img/activities/night-market.webp" | "/img/activities/night-view.webp" | "/img/activities/surf.webp" | "/img/activities/taiwan-temple.webp" | "/img/activities/tea-ceremony.webp" | "/img/activities/xiaolongbao-food.webp" | "/img/learn-chinese-calligraphy.webp" | "/img/logo-taipei-journey.png" | "/img/logo-taipei-journey.webp" | "/img/modern-house.webp" | "/img/taipei-golden-hour.webp" | "/img/taipei-night-market.webp" | "/img/taipei-palace.webp" | string & {};
	}
}