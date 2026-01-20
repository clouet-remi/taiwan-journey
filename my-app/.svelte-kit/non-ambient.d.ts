
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
		Asset(): "/css/reset.css" | "/css/styles.css" | "/favicon.svg" | "/img/accommodations/hsinchu-loft.jpg" | "/img/accommodations/kaohsiung-seaview.jpg" | "/img/accommodations/sun-moon-lake-cabin.jpg" | "/img/accommodations/taichung-condo.jpg" | "/img/accommodations/taipei-studio.jpg" | "/img/accommodations/taitung-house.jpg" | "/img/accommodations/tamsui-riverside.jpg" | "/img/accommodations/xinyi-apartment.jpg" | "/img/accommodations/yilan-villa.jpg" | "/img/activities/boat-festival.jpg" | "/img/activities/concert.jpg" | "/img/activities/cooking-food.jpg" | "/img/activities/food-experience.jpg" | "/img/activities/glamping.jpg" | "/img/activities/hiking-taiwan.jpg" | "/img/activities/hot-spring.jpg" | "/img/activities/night-market.jpg" | "/img/activities/night-view.jpg" | "/img/activities/surf.jpg" | "/img/activities/taiwan-temple.jpg" | "/img/activities/tea-ceremony.jpg" | "/img/activities/xiaolongbao-food.jpg" | "/img/learn-chinese-calligraphy.jpg" | "/img/logo-taipei-journey.png" | "/img/modern-house.jpg" | "/img/taipei-golden-hour.jpg" | "/img/taipei-night-market.jpg" | "/img/taipei-palace.jpg" | string & {};
	}
}