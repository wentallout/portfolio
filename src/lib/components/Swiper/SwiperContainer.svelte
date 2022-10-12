<script>
	import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
	import { Swiper } from 'swiper/svelte';
	import 'swiper/css/bundle';
</script>

<Swiper
	a11y={{ prevSlideMessage: 'Previous slide', nextSlideMessage: 'Next slide' }}
	grabCursor={true}
	breakpoints={{
		768: {
			slidesPerView: 2,
			slidesPerGroup: 2
		}
	}}
	spaceBetween={16}
	slidesPerView={1}
	pagination={{ clickable: true, type: 'fraction' }}
	scrollbar={{ draggable: true }}
	autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
	modules={[Pagination, Scrollbar, A11y, Autoplay]}>
	<slot />
</Swiper>

<style>
</style>
