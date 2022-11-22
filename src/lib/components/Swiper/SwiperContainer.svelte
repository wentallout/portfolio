<script>
	import { Pagination, Scrollbar, Autoplay, Mousewheel } from 'swiper';
	import { Swiper } from 'swiper/svelte';
	import 'swiper/css/bundle';
</script>

<Swiper
	grabCursor={true}
	breakpoints={{
		768: {
			slidesPerView: 2,
			slidesPerGroup: 2
		}
	}}
	spaceBetween={16}
	slidesPerView={1}
	pagination={{ clickable: true, type: 'bullets' }}
	scrollbar={{ draggable: true }}
	mousewheel
	zoom={true}
	autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
	modules={[Pagination, Scrollbar, Autoplay, Mousewheel]}>
	<slot />
</Swiper>

<style>
</style>
