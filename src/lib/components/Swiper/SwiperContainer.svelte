<script>
	// import Swiper core and required modules
	import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom, Lazy } from 'swiper';

	import { Swiper } from 'swiper/svelte';

	import CaretCircleLeft from '~icons/ph/caret-circle-left';

	import CaretCircleRight from '~icons/ph/caret-circle-right';

	// Import Swiper styles
</script>

<div class="swiper-btn">
	<div class="swiper-prev">
		<CaretCircleLeft width="40" height="40" />
	</div>
	<div class="swiper-next">
		<CaretCircleRight width="40" height="40" />
	</div>
</div>
<Swiper
	style="--swiper-navigation-color: #fff;--swiper-pagination-color: #fff"
	a11y={{ prevSlideMessage: 'Previous slide', nextSlideMessage: 'Next slide' }}
	lazy={true}
	spaceBetween={16}
	slidesPerView={2}
	navigation={{ enabled: true, prevEl: '.swiper-prev', nextEl: '.swiper-next' }}
	pagination={{ clickable: true, type: 'fraction' }}
	scrollbar={{ draggable: true }}
	autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
	zoom={{ maxRatio: 5 }}
	modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom, Lazy]}>
	<slot />
</Swiper>

<style>
	.swiper-btn {
		display: flex;
		flex-direction: row;
	}

	.swiper-prev,
	.swiper-next {
		width: 50px;
		height: 50px;
	}
</style>
