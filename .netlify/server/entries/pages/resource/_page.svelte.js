import {
	c as create_ssr_component,
	o as compute_rest_props,
	l as createEventDispatcher,
	s as setContext,
	p as onDestroy,
	e as spread,
	q as escape_attribute_value,
	f as escape_object,
	d as add_attribute,
	t as is_void,
	w as tick,
	k as getContext,
	v as validate_component,
	g as each,
	h as escape
} from '../../../chunks/index3.js';
import { P as PageTitle } from '../../../chunks/PageTitle.js';
import { S as SectionDesc } from '../../../chunks/SectionDesc.js';
import { n as nextTick, a as now, S as Swiper } from '../../../chunks/core.js';
import { getWindow, getDocument } from 'ssr-window';
import { $ } from 'dom7';
import { E as ExLink } from '../../../chunks/ExLink.js';
import { S as SectionTitle } from '../../../chunks/SectionTitle.js';
const OtherCardList_svelte_svelte_type_style_lang = '';
const css$4 = {
	code: '.other-container.svelte-4zfn39.svelte-4zfn39{display:flex;flex-direction:row;flex-wrap:wrap;gap:var(--space-m);overflow:hidden}.other-container.svelte-4zfn39>.svelte-4zfn39{flex:1 1 10ch}.other__image.svelte-4zfn39.svelte-4zfn39{filter:brightness(40%);height:100%;position:absolute;transition:var(--transition);width:100%;z-index:0}.other.svelte-4zfn39.svelte-4zfn39{align-items:center;border-radius:var(--border-radius);box-shadow:var(--box-shadow-1);display:flex;height:300px;justify-content:center;overflow:hidden;padding:var(--space-m);position:relative}.other.svelte-4zfn39:hover .other__image.svelte-4zfn39{scale:1.15}.other.svelte-4zfn39:hover .other__title.svelte-4zfn39{color:var(--primary-500)}.other__title.svelte-4zfn39.svelte-4zfn39{color:var(--text-color);font-weight:600;z-index:1}',
	map: null
};
const OtherCardList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$4);
	return `<div class="${'other-container svelte-4zfn39'}"><a class="${'other svelte-4zfn39'}" href="${'/resource/music'}"><img class="${'other__image svelte-4zfn39'}" src="${'images/music.webp'}" alt="${'music'}">
		<div class="${'other__title large-text svelte-4zfn39'}">Music</div></a>

	<a class="${'other svelte-4zfn39'}" href="${'/resource/exp'}"><img class="${'other__image svelte-4zfn39'}" src="${'images/exp.webp'}" alt="${'experiment'}">
		<div class="${'other__title large-text svelte-4zfn39'}">Experiment</div></a>
</div>`;
});
function Mousewheel({ swiper, extendParams, on, emit }) {
	const window2 = getWindow();
	extendParams({
		mousewheel: {
			enabled: false,
			releaseOnEdges: false,
			invert: false,
			forceToAxis: false,
			sensitivity: 1,
			eventsTarget: 'container',
			thresholdDelta: null,
			thresholdTime: null
		}
	});
	swiper.mousewheel = {
		enabled: false
	};
	let timeout;
	let lastScrollTime = now();
	let lastEventBeforeSnap;
	const recentWheelEvents = [];
	function normalize(e) {
		const PIXEL_STEP = 10;
		const LINE_HEIGHT = 40;
		const PAGE_HEIGHT = 800;
		let sX = 0;
		let sY = 0;
		let pX = 0;
		let pY = 0;
		if ('detail' in e) {
			sY = e.detail;
		}
		if ('wheelDelta' in e) {
			sY = -e.wheelDelta / 120;
		}
		if ('wheelDeltaY' in e) {
			sY = -e.wheelDeltaY / 120;
		}
		if ('wheelDeltaX' in e) {
			sX = -e.wheelDeltaX / 120;
		}
		if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
			sX = sY;
			sY = 0;
		}
		pX = sX * PIXEL_STEP;
		pY = sY * PIXEL_STEP;
		if ('deltaY' in e) {
			pY = e.deltaY;
		}
		if ('deltaX' in e) {
			pX = e.deltaX;
		}
		if (e.shiftKey && !pX) {
			pX = pY;
			pY = 0;
		}
		if ((pX || pY) && e.deltaMode) {
			if (e.deltaMode === 1) {
				pX *= LINE_HEIGHT;
				pY *= LINE_HEIGHT;
			} else {
				pX *= PAGE_HEIGHT;
				pY *= PAGE_HEIGHT;
			}
		}
		if (pX && !sX) {
			sX = pX < 1 ? -1 : 1;
		}
		if (pY && !sY) {
			sY = pY < 1 ? -1 : 1;
		}
		return {
			spinX: sX,
			spinY: sY,
			pixelX: pX,
			pixelY: pY
		};
	}
	function handleMouseEnter() {
		if (!swiper.enabled) return;
		swiper.mouseEntered = true;
	}
	function handleMouseLeave() {
		if (!swiper.enabled) return;
		swiper.mouseEntered = false;
	}
	function animateSlider(newEvent) {
		if (
			swiper.params.mousewheel.thresholdDelta &&
			newEvent.delta < swiper.params.mousewheel.thresholdDelta
		) {
			return false;
		}
		if (
			swiper.params.mousewheel.thresholdTime &&
			now() - lastScrollTime < swiper.params.mousewheel.thresholdTime
		) {
			return false;
		}
		if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
			return true;
		}
		if (newEvent.direction < 0) {
			if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
				swiper.slideNext();
				emit('scroll', newEvent.raw);
			}
		} else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
			swiper.slidePrev();
			emit('scroll', newEvent.raw);
		}
		lastScrollTime = new window2.Date().getTime();
		return false;
	}
	function releaseScroll(newEvent) {
		const params = swiper.params.mousewheel;
		if (newEvent.direction < 0) {
			if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
				return true;
			}
		} else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
			return true;
		}
		return false;
	}
	function handle(event2) {
		let e = event2;
		let disableParentSwiper = true;
		if (!swiper.enabled) return;
		const params = swiper.params.mousewheel;
		if (swiper.params.cssMode) {
			e.preventDefault();
		}
		let target = swiper.$el;
		if (swiper.params.mousewheel.eventsTarget !== 'container') {
			target = $(swiper.params.mousewheel.eventsTarget);
		}
		if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges)
			return true;
		if (e.originalEvent) e = e.originalEvent;
		let delta = 0;
		const rtlFactor = swiper.rtlTranslate ? -1 : 1;
		const data = normalize(e);
		if (params.forceToAxis) {
			if (swiper.isHorizontal()) {
				if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
				else return true;
			} else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
			else return true;
		} else {
			delta =
				Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
		}
		if (delta === 0) return true;
		if (params.invert) delta = -delta;
		let positions = swiper.getTranslate() + delta * params.sensitivity;
		if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
		if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
		disableParentSwiper = swiper.params.loop
			? true
			: !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
		if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
		if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
			const newEvent = {
				time: now(),
				delta: Math.abs(delta),
				direction: Math.sign(delta),
				raw: event2
			};
			if (recentWheelEvents.length >= 2) {
				recentWheelEvents.shift();
			}
			const prevEvent = recentWheelEvents.length
				? recentWheelEvents[recentWheelEvents.length - 1]
				: void 0;
			recentWheelEvents.push(newEvent);
			if (prevEvent) {
				if (
					newEvent.direction !== prevEvent.direction ||
					newEvent.delta > prevEvent.delta ||
					newEvent.time > prevEvent.time + 150
				) {
					animateSlider(newEvent);
				}
			} else {
				animateSlider(newEvent);
			}
			if (releaseScroll(newEvent)) {
				return true;
			}
		} else {
			const newEvent = {
				time: now(),
				delta: Math.abs(delta),
				direction: Math.sign(delta)
			};
			const ignoreWheelEvents =
				lastEventBeforeSnap &&
				newEvent.time < lastEventBeforeSnap.time + 500 &&
				newEvent.delta <= lastEventBeforeSnap.delta &&
				newEvent.direction === lastEventBeforeSnap.direction;
			if (!ignoreWheelEvents) {
				lastEventBeforeSnap = void 0;
				if (swiper.params.loop) {
					swiper.loopFix();
				}
				let position = swiper.getTranslate() + delta * params.sensitivity;
				const wasBeginning = swiper.isBeginning;
				const wasEnd = swiper.isEnd;
				if (position >= swiper.minTranslate()) position = swiper.minTranslate();
				if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
				swiper.setTransition(0);
				swiper.setTranslate(position);
				swiper.updateProgress();
				swiper.updateActiveIndex();
				swiper.updateSlidesClasses();
				if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
					swiper.updateSlidesClasses();
				}
				if (swiper.params.freeMode.sticky) {
					clearTimeout(timeout);
					timeout = void 0;
					if (recentWheelEvents.length >= 15) {
						recentWheelEvents.shift();
					}
					const prevEvent = recentWheelEvents.length
						? recentWheelEvents[recentWheelEvents.length - 1]
						: void 0;
					const firstEvent = recentWheelEvents[0];
					recentWheelEvents.push(newEvent);
					if (
						prevEvent &&
						(newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)
					) {
						recentWheelEvents.splice(0);
					} else if (
						recentWheelEvents.length >= 15 &&
						newEvent.time - firstEvent.time < 500 &&
						firstEvent.delta - newEvent.delta >= 1 &&
						newEvent.delta <= 6
					) {
						const snapToThreshold = delta > 0 ? 0.8 : 0.2;
						lastEventBeforeSnap = newEvent;
						recentWheelEvents.splice(0);
						timeout = nextTick(() => {
							swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
						}, 0);
					}
					if (!timeout) {
						timeout = nextTick(() => {
							const snapToThreshold = 0.5;
							lastEventBeforeSnap = newEvent;
							recentWheelEvents.splice(0);
							swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
						}, 500);
					}
				}
				if (!ignoreWheelEvents) emit('scroll', e);
				if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction)
					swiper.autoplay.stop();
				if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
			}
		}
		if (e.preventDefault) e.preventDefault();
		else e.returnValue = false;
		return false;
	}
	function events(method) {
		let target = swiper.$el;
		if (swiper.params.mousewheel.eventsTarget !== 'container') {
			target = $(swiper.params.mousewheel.eventsTarget);
		}
		target[method]('mouseenter', handleMouseEnter);
		target[method]('mouseleave', handleMouseLeave);
		target[method]('wheel', handle);
	}
	function enable() {
		if (swiper.params.cssMode) {
			swiper.wrapperEl.removeEventListener('wheel', handle);
			return true;
		}
		if (swiper.mousewheel.enabled) return false;
		events('on');
		swiper.mousewheel.enabled = true;
		return true;
	}
	function disable() {
		if (swiper.params.cssMode) {
			swiper.wrapperEl.addEventListener(event, handle);
			return true;
		}
		if (!swiper.mousewheel.enabled) return false;
		events('off');
		swiper.mousewheel.enabled = false;
		return true;
	}
	on('init', () => {
		if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
			disable();
		}
		if (swiper.params.mousewheel.enabled) enable();
	});
	on('destroy', () => {
		if (swiper.params.cssMode) {
			enable();
		}
		if (swiper.mousewheel.enabled) disable();
	});
	Object.assign(swiper.mousewheel, {
		enable,
		disable
	});
}
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
	const document = getDocument();
	if (swiper.params.createElements) {
		Object.keys(checkProps).forEach((key) => {
			if (!params[key] && params.auto === true) {
				let element = swiper.$el.children(`.${checkProps[key]}`)[0];
				if (!element) {
					element = document.createElement('div');
					element.className = checkProps[key];
					swiper.$el.append(element);
				}
				params[key] = element;
				originalParams[key] = element;
			}
		});
	}
	return params;
}
function classesToSelector(classes = '') {
	return `.${classes
		.trim()
		.replace(/([\.:!\/])/g, '\\$1')
		.replace(/ /g, '.')}`;
}
function Pagination({ swiper, extendParams, on, emit }) {
	const pfx = 'swiper-pagination';
	extendParams({
		pagination: {
			el: null,
			bulletElement: 'span',
			clickable: false,
			hideOnClick: false,
			renderBullet: null,
			renderProgressbar: null,
			renderFraction: null,
			renderCustom: null,
			progressbarOpposite: false,
			type: 'bullets',
			dynamicBullets: false,
			dynamicMainBullets: 1,
			formatFractionCurrent: (number) => number,
			formatFractionTotal: (number) => number,
			bulletClass: `${pfx}-bullet`,
			bulletActiveClass: `${pfx}-bullet-active`,
			modifierClass: `${pfx}-`,
			currentClass: `${pfx}-current`,
			totalClass: `${pfx}-total`,
			hiddenClass: `${pfx}-hidden`,
			progressbarFillClass: `${pfx}-progressbar-fill`,
			progressbarOppositeClass: `${pfx}-progressbar-opposite`,
			clickableClass: `${pfx}-clickable`,
			lockClass: `${pfx}-lock`,
			horizontalClass: `${pfx}-horizontal`,
			verticalClass: `${pfx}-vertical`,
			paginationDisabledClass: `${pfx}-disabled`
		}
	});
	swiper.pagination = {
		el: null,
		$el: null,
		bullets: []
	};
	let bulletSize;
	let dynamicBulletIndex = 0;
	function isPaginationDisabled() {
		return (
			!swiper.params.pagination.el ||
			!swiper.pagination.el ||
			!swiper.pagination.$el ||
			swiper.pagination.$el.length === 0
		);
	}
	function setSideBullets($bulletEl, position) {
		const { bulletActiveClass } = swiper.params.pagination;
		$bulletEl[position]()
			.addClass(`${bulletActiveClass}-${position}`)
			[position]()
			.addClass(`${bulletActiveClass}-${position}-${position}`);
	}
	function update() {
		const rtl = swiper.rtl;
		const params = swiper.params.pagination;
		if (isPaginationDisabled()) return;
		const slidesLength =
			swiper.virtual && swiper.params.virtual.enabled
				? swiper.virtual.slides.length
				: swiper.slides.length;
		const $el = swiper.pagination.$el;
		let current;
		const total = swiper.params.loop
			? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup)
			: swiper.snapGrid.length;
		if (swiper.params.loop) {
			current = Math.ceil(
				(swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup
			);
			if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
				current -= slidesLength - swiper.loopedSlides * 2;
			}
			if (current > total - 1) current -= total;
			if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
		} else if (typeof swiper.snapIndex !== 'undefined') {
			current = swiper.snapIndex;
		} else {
			current = swiper.activeIndex || 0;
		}
		if (
			params.type === 'bullets' &&
			swiper.pagination.bullets &&
			swiper.pagination.bullets.length > 0
		) {
			const bullets = swiper.pagination.bullets;
			let firstIndex;
			let lastIndex;
			let midIndex;
			if (params.dynamicBullets) {
				bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
				$el.css(
					swiper.isHorizontal() ? 'width' : 'height',
					`${bulletSize * (params.dynamicMainBullets + 4)}px`
				);
				if (params.dynamicMainBullets > 1 && swiper.previousIndex !== void 0) {
					dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
					if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
						dynamicBulletIndex = params.dynamicMainBullets - 1;
					} else if (dynamicBulletIndex < 0) {
						dynamicBulletIndex = 0;
					}
				}
				firstIndex = Math.max(current - dynamicBulletIndex, 0);
				lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
				midIndex = (lastIndex + firstIndex) / 2;
			}
			bullets.removeClass(
				['', '-next', '-next-next', '-prev', '-prev-prev', '-main']
					.map((suffix) => `${params.bulletActiveClass}${suffix}`)
					.join(' ')
			);
			if ($el.length > 1) {
				bullets.each((bullet) => {
					const $bullet = $(bullet);
					const bulletIndex = $bullet.index();
					if (bulletIndex === current) {
						$bullet.addClass(params.bulletActiveClass);
					}
					if (params.dynamicBullets) {
						if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
							$bullet.addClass(`${params.bulletActiveClass}-main`);
						}
						if (bulletIndex === firstIndex) {
							setSideBullets($bullet, 'prev');
						}
						if (bulletIndex === lastIndex) {
							setSideBullets($bullet, 'next');
						}
					}
				});
			} else {
				const $bullet = bullets.eq(current);
				const bulletIndex = $bullet.index();
				$bullet.addClass(params.bulletActiveClass);
				if (params.dynamicBullets) {
					const $firstDisplayedBullet = bullets.eq(firstIndex);
					const $lastDisplayedBullet = bullets.eq(lastIndex);
					for (let i = firstIndex; i <= lastIndex; i += 1) {
						bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
					}
					if (swiper.params.loop) {
						if (bulletIndex >= bullets.length) {
							for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
								bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
							}
							bullets
								.eq(bullets.length - params.dynamicMainBullets - 1)
								.addClass(`${params.bulletActiveClass}-prev`);
						} else {
							setSideBullets($firstDisplayedBullet, 'prev');
							setSideBullets($lastDisplayedBullet, 'next');
						}
					} else {
						setSideBullets($firstDisplayedBullet, 'prev');
						setSideBullets($lastDisplayedBullet, 'next');
					}
				}
			}
			if (params.dynamicBullets) {
				const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
				const bulletsOffset =
					(bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
				const offsetProp = rtl ? 'right' : 'left';
				bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
			}
		}
		if (params.type === 'fraction') {
			$el
				.find(classesToSelector(params.currentClass))
				.text(params.formatFractionCurrent(current + 1));
			$el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
		}
		if (params.type === 'progressbar') {
			let progressbarDirection;
			if (params.progressbarOpposite) {
				progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
			} else {
				progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
			}
			const scale = (current + 1) / total;
			let scaleX = 1;
			let scaleY = 1;
			if (progressbarDirection === 'horizontal') {
				scaleX = scale;
			} else {
				scaleY = scale;
			}
			$el
				.find(classesToSelector(params.progressbarFillClass))
				.transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`)
				.transition(swiper.params.speed);
		}
		if (params.type === 'custom' && params.renderCustom) {
			$el.html(params.renderCustom(swiper, current + 1, total));
			emit('paginationRender', $el[0]);
		} else {
			emit('paginationUpdate', $el[0]);
		}
		if (swiper.params.watchOverflow && swiper.enabled) {
			$el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
		}
	}
	function render() {
		const params = swiper.params.pagination;
		if (isPaginationDisabled()) return;
		const slidesLength =
			swiper.virtual && swiper.params.virtual.enabled
				? swiper.virtual.slides.length
				: swiper.slides.length;
		const $el = swiper.pagination.$el;
		let paginationHTML = '';
		if (params.type === 'bullets') {
			let numberOfBullets = swiper.params.loop
				? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup)
				: swiper.snapGrid.length;
			if (
				swiper.params.freeMode &&
				swiper.params.freeMode.enabled &&
				!swiper.params.loop &&
				numberOfBullets > slidesLength
			) {
				numberOfBullets = slidesLength;
			}
			for (let i = 0; i < numberOfBullets; i += 1) {
				if (params.renderBullet) {
					paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
				} else {
					paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
				}
			}
			$el.html(paginationHTML);
			swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
		}
		if (params.type === 'fraction') {
			if (params.renderFraction) {
				paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
			} else {
				paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
			}
			$el.html(paginationHTML);
		}
		if (params.type === 'progressbar') {
			if (params.renderProgressbar) {
				paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
			} else {
				paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
			}
			$el.html(paginationHTML);
		}
		if (params.type !== 'custom') {
			emit('paginationRender', swiper.pagination.$el[0]);
		}
	}
	function init() {
		swiper.params.pagination = createElementIfNotDefined(
			swiper,
			swiper.originalParams.pagination,
			swiper.params.pagination,
			{
				el: 'swiper-pagination'
			}
		);
		const params = swiper.params.pagination;
		if (!params.el) return;
		let $el = $(params.el);
		if ($el.length === 0) return;
		if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
			$el = swiper.$el.find(params.el);
			if ($el.length > 1) {
				$el = $el.filter((el) => {
					if ($(el).parents('.swiper')[0] !== swiper.el) return false;
					return true;
				});
			}
		}
		if (params.type === 'bullets' && params.clickable) {
			$el.addClass(params.clickableClass);
		}
		$el.addClass(params.modifierClass + params.type);
		$el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
		if (params.type === 'bullets' && params.dynamicBullets) {
			$el.addClass(`${params.modifierClass}${params.type}-dynamic`);
			dynamicBulletIndex = 0;
			if (params.dynamicMainBullets < 1) {
				params.dynamicMainBullets = 1;
			}
		}
		if (params.type === 'progressbar' && params.progressbarOpposite) {
			$el.addClass(params.progressbarOppositeClass);
		}
		if (params.clickable) {
			$el.on('click', classesToSelector(params.bulletClass), function onClick(e) {
				e.preventDefault();
				let index = $(this).index() * swiper.params.slidesPerGroup;
				if (swiper.params.loop) index += swiper.loopedSlides;
				swiper.slideTo(index);
			});
		}
		Object.assign(swiper.pagination, {
			$el,
			el: $el[0]
		});
		if (!swiper.enabled) {
			$el.addClass(params.lockClass);
		}
	}
	function destroy() {
		const params = swiper.params.pagination;
		if (isPaginationDisabled()) return;
		const $el = swiper.pagination.$el;
		$el.removeClass(params.hiddenClass);
		$el.removeClass(params.modifierClass + params.type);
		$el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
		if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass)
			swiper.pagination.bullets.removeClass(params.bulletActiveClass);
		if (params.clickable) {
			$el.off('click', classesToSelector(params.bulletClass));
		}
	}
	on('init', () => {
		if (swiper.params.pagination.enabled === false) {
			disable();
		} else {
			init();
			render();
			update();
		}
	});
	on('activeIndexChange', () => {
		if (swiper.params.loop) {
			update();
		} else if (typeof swiper.snapIndex === 'undefined') {
			update();
		}
	});
	on('snapIndexChange', () => {
		if (!swiper.params.loop) {
			update();
		}
	});
	on('slidesLengthChange', () => {
		if (swiper.params.loop) {
			render();
			update();
		}
	});
	on('snapGridLengthChange', () => {
		if (!swiper.params.loop) {
			render();
			update();
		}
	});
	on('destroy', () => {
		destroy();
	});
	on('enable disable', () => {
		const { $el } = swiper.pagination;
		if ($el) {
			$el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
		}
	});
	on('lock unlock', () => {
		update();
	});
	on('click', (_s, e) => {
		const targetEl = e.target;
		const { $el } = swiper.pagination;
		if (
			swiper.params.pagination.el &&
			swiper.params.pagination.hideOnClick &&
			$el &&
			$el.length > 0 &&
			!$(targetEl).hasClass(swiper.params.pagination.bulletClass)
		) {
			if (
				swiper.navigation &&
				((swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) ||
					(swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
			)
				return;
			const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
			if (isHidden === true) {
				emit('paginationShow');
			} else {
				emit('paginationHide');
			}
			$el.toggleClass(swiper.params.pagination.hiddenClass);
		}
	});
	const enable = () => {
		swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
		if (swiper.pagination.$el) {
			swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
		}
		init();
		render();
		update();
	};
	const disable = () => {
		swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);
		if (swiper.pagination.$el) {
			swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass);
		}
		destroy();
	};
	Object.assign(swiper.pagination, {
		enable,
		disable,
		render,
		update,
		init,
		destroy
	});
}
function Scrollbar({ swiper, extendParams, on, emit }) {
	const document = getDocument();
	let isTouched = false;
	let timeout = null;
	let dragTimeout = null;
	let dragStartPos;
	let dragSize;
	let trackSize;
	let divider;
	extendParams({
		scrollbar: {
			el: null,
			dragSize: 'auto',
			hide: false,
			draggable: false,
			snapOnRelease: true,
			lockClass: 'swiper-scrollbar-lock',
			dragClass: 'swiper-scrollbar-drag',
			scrollbarDisabledClass: 'swiper-scrollbar-disabled',
			horizontalClass: `swiper-scrollbar-horizontal`,
			verticalClass: `swiper-scrollbar-vertical`
		}
	});
	swiper.scrollbar = {
		el: null,
		dragEl: null,
		$el: null,
		$dragEl: null
	};
	function setTranslate() {
		if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
		const { scrollbar, rtlTranslate: rtl, progress } = swiper;
		const { $dragEl, $el } = scrollbar;
		const params = swiper.params.scrollbar;
		let newSize = dragSize;
		let newPos = (trackSize - dragSize) * progress;
		if (rtl) {
			newPos = -newPos;
			if (newPos > 0) {
				newSize = dragSize - newPos;
				newPos = 0;
			} else if (-newPos + dragSize > trackSize) {
				newSize = trackSize + newPos;
			}
		} else if (newPos < 0) {
			newSize = dragSize + newPos;
			newPos = 0;
		} else if (newPos + dragSize > trackSize) {
			newSize = trackSize - newPos;
		}
		if (swiper.isHorizontal()) {
			$dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
			$dragEl[0].style.width = `${newSize}px`;
		} else {
			$dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
			$dragEl[0].style.height = `${newSize}px`;
		}
		if (params.hide) {
			clearTimeout(timeout);
			$el[0].style.opacity = 1;
			timeout = setTimeout(() => {
				$el[0].style.opacity = 0;
				$el.transition(400);
			}, 1e3);
		}
	}
	function setTransition(duration) {
		if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
		swiper.scrollbar.$dragEl.transition(duration);
	}
	function updateSize() {
		if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
		const { scrollbar } = swiper;
		const { $dragEl, $el } = scrollbar;
		$dragEl[0].style.width = '';
		$dragEl[0].style.height = '';
		trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
		divider =
			swiper.size /
			(swiper.virtualSize +
				swiper.params.slidesOffsetBefore -
				(swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
		if (swiper.params.scrollbar.dragSize === 'auto') {
			dragSize = trackSize * divider;
		} else {
			dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
		}
		if (swiper.isHorizontal()) {
			$dragEl[0].style.width = `${dragSize}px`;
		} else {
			$dragEl[0].style.height = `${dragSize}px`;
		}
		if (divider >= 1) {
			$el[0].style.display = 'none';
		} else {
			$el[0].style.display = '';
		}
		if (swiper.params.scrollbar.hide) {
			$el[0].style.opacity = 0;
		}
		if (swiper.params.watchOverflow && swiper.enabled) {
			scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](
				swiper.params.scrollbar.lockClass
			);
		}
	}
	function getPointerPosition(e) {
		if (swiper.isHorizontal()) {
			return e.type === 'touchstart' || e.type === 'touchmove'
				? e.targetTouches[0].clientX
				: e.clientX;
		}
		return e.type === 'touchstart' || e.type === 'touchmove'
			? e.targetTouches[0].clientY
			: e.clientY;
	}
	function setDragPosition(e) {
		const { scrollbar, rtlTranslate: rtl } = swiper;
		const { $el } = scrollbar;
		let positionRatio;
		positionRatio =
			(getPointerPosition(e) -
				$el.offset()[swiper.isHorizontal() ? 'left' : 'top'] -
				(dragStartPos !== null ? dragStartPos : dragSize / 2)) /
			(trackSize - dragSize);
		positionRatio = Math.max(Math.min(positionRatio, 1), 0);
		if (rtl) {
			positionRatio = 1 - positionRatio;
		}
		const position =
			swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
		swiper.updateProgress(position);
		swiper.setTranslate(position);
		swiper.updateActiveIndex();
		swiper.updateSlidesClasses();
	}
	function onDragStart(e) {
		const params = swiper.params.scrollbar;
		const { scrollbar, $wrapperEl } = swiper;
		const { $el, $dragEl } = scrollbar;
		isTouched = true;
		dragStartPos =
			e.target === $dragEl[0] || e.target === $dragEl
				? getPointerPosition(e) -
				  e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top']
				: null;
		e.preventDefault();
		e.stopPropagation();
		$wrapperEl.transition(100);
		$dragEl.transition(100);
		setDragPosition(e);
		clearTimeout(dragTimeout);
		$el.transition(0);
		if (params.hide) {
			$el.css('opacity', 1);
		}
		if (swiper.params.cssMode) {
			swiper.$wrapperEl.css('scroll-snap-type', 'none');
		}
		emit('scrollbarDragStart', e);
	}
	function onDragMove(e) {
		const { scrollbar, $wrapperEl } = swiper;
		const { $el, $dragEl } = scrollbar;
		if (!isTouched) return;
		if (e.preventDefault) e.preventDefault();
		else e.returnValue = false;
		setDragPosition(e);
		$wrapperEl.transition(0);
		$el.transition(0);
		$dragEl.transition(0);
		emit('scrollbarDragMove', e);
	}
	function onDragEnd(e) {
		const params = swiper.params.scrollbar;
		const { scrollbar, $wrapperEl } = swiper;
		const { $el } = scrollbar;
		if (!isTouched) return;
		isTouched = false;
		if (swiper.params.cssMode) {
			swiper.$wrapperEl.css('scroll-snap-type', '');
			$wrapperEl.transition('');
		}
		if (params.hide) {
			clearTimeout(dragTimeout);
			dragTimeout = nextTick(() => {
				$el.css('opacity', 0);
				$el.transition(400);
			}, 1e3);
		}
		emit('scrollbarDragEnd', e);
		if (params.snapOnRelease) {
			swiper.slideToClosest();
		}
	}
	function events(method) {
		const { scrollbar, touchEventsTouch, touchEventsDesktop, params, support } = swiper;
		const $el = scrollbar.$el;
		if (!$el) return;
		const target = $el[0];
		const activeListener =
			support.passiveListener && params.passiveListeners
				? {
						passive: false,
						capture: false
				  }
				: false;
		const passiveListener =
			support.passiveListener && params.passiveListeners
				? {
						passive: true,
						capture: false
				  }
				: false;
		if (!target) return;
		const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
		if (!support.touch) {
			target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
			document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
			document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
		} else {
			target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
			target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
			target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
		}
	}
	function enableDraggable() {
		if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
		events('on');
	}
	function disableDraggable() {
		if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
		events('off');
	}
	function init() {
		const { scrollbar, $el: $swiperEl } = swiper;
		swiper.params.scrollbar = createElementIfNotDefined(
			swiper,
			swiper.originalParams.scrollbar,
			swiper.params.scrollbar,
			{
				el: 'swiper-scrollbar'
			}
		);
		const params = swiper.params.scrollbar;
		if (!params.el) return;
		let $el = $(params.el);
		if (
			swiper.params.uniqueNavElements &&
			typeof params.el === 'string' &&
			$el.length > 1 &&
			$swiperEl.find(params.el).length === 1
		) {
			$el = $swiperEl.find(params.el);
		}
		$el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
		let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
		if ($dragEl.length === 0) {
			$dragEl = $(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
			$el.append($dragEl);
		}
		Object.assign(scrollbar, {
			$el,
			el: $el[0],
			$dragEl,
			dragEl: $dragEl[0]
		});
		if (params.draggable) {
			enableDraggable();
		}
		if ($el) {
			$el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
		}
	}
	function destroy() {
		const params = swiper.params.scrollbar;
		const $el = swiper.scrollbar.$el;
		if ($el) {
			$el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
		}
		disableDraggable();
	}
	on('init', () => {
		if (swiper.params.scrollbar.enabled === false) {
			disable();
		} else {
			init();
			updateSize();
			setTranslate();
		}
	});
	on('update resize observerUpdate lock unlock', () => {
		updateSize();
	});
	on('setTranslate', () => {
		setTranslate();
	});
	on('setTransition', (_s, duration) => {
		setTransition(duration);
	});
	on('enable disable', () => {
		const { $el } = swiper.scrollbar;
		if ($el) {
			$el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
		}
	});
	on('destroy', () => {
		destroy();
	});
	const enable = () => {
		swiper.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
		if (swiper.scrollbar.$el) {
			swiper.scrollbar.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
		}
		init();
		updateSize();
		setTranslate();
	};
	const disable = () => {
		swiper.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
		if (swiper.scrollbar.$el) {
			swiper.scrollbar.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
		}
		destroy();
	};
	Object.assign(swiper.scrollbar, {
		enable,
		disable,
		updateSize,
		setTranslate,
		init,
		destroy
	});
}
function Autoplay({ swiper, extendParams, on, emit }) {
	let timeout;
	swiper.autoplay = {
		running: false,
		paused: false
	};
	extendParams({
		autoplay: {
			enabled: false,
			delay: 3e3,
			waitForTransition: true,
			disableOnInteraction: true,
			stopOnLastSlide: false,
			reverseDirection: false,
			pauseOnMouseEnter: false
		}
	});
	function run() {
		if (!swiper.size) {
			swiper.autoplay.running = false;
			swiper.autoplay.paused = false;
			return;
		}
		const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
		let delay = swiper.params.autoplay.delay;
		if ($activeSlideEl.attr('data-swiper-autoplay')) {
			delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
		}
		clearTimeout(timeout);
		timeout = nextTick(() => {
			let autoplayResult;
			if (swiper.params.autoplay.reverseDirection) {
				if (swiper.params.loop) {
					swiper.loopFix();
					autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
					emit('autoplay');
				} else if (!swiper.isBeginning) {
					autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
					emit('autoplay');
				} else if (!swiper.params.autoplay.stopOnLastSlide) {
					autoplayResult = swiper.slideTo(
						swiper.slides.length - 1,
						swiper.params.speed,
						true,
						true
					);
					emit('autoplay');
				} else {
					stop();
				}
			} else if (swiper.params.loop) {
				swiper.loopFix();
				autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
				emit('autoplay');
			} else if (!swiper.isEnd) {
				autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
				emit('autoplay');
			} else if (!swiper.params.autoplay.stopOnLastSlide) {
				autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
				emit('autoplay');
			} else {
				stop();
			}
			if (swiper.params.cssMode && swiper.autoplay.running) run();
			else if (autoplayResult === false) {
				run();
			}
		}, delay);
	}
	function start() {
		if (typeof timeout !== 'undefined') return false;
		if (swiper.autoplay.running) return false;
		swiper.autoplay.running = true;
		emit('autoplayStart');
		run();
		return true;
	}
	function stop() {
		if (!swiper.autoplay.running) return false;
		if (typeof timeout === 'undefined') return false;
		if (timeout) {
			clearTimeout(timeout);
			timeout = void 0;
		}
		swiper.autoplay.running = false;
		emit('autoplayStop');
		return true;
	}
	function pause(speed) {
		if (!swiper.autoplay.running) return;
		if (swiper.autoplay.paused) return;
		if (timeout) clearTimeout(timeout);
		swiper.autoplay.paused = true;
		if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
			swiper.autoplay.paused = false;
			run();
		} else {
			['transitionend', 'webkitTransitionEnd'].forEach((event2) => {
				swiper.$wrapperEl[0].addEventListener(event2, onTransitionEnd);
			});
		}
	}
	function onVisibilityChange() {
		const document = getDocument();
		if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
			pause();
		}
		if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
			run();
			swiper.autoplay.paused = false;
		}
	}
	function onTransitionEnd(e) {
		if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
		if (e.target !== swiper.$wrapperEl[0]) return;
		['transitionend', 'webkitTransitionEnd'].forEach((event2) => {
			swiper.$wrapperEl[0].removeEventListener(event2, onTransitionEnd);
		});
		swiper.autoplay.paused = false;
		if (!swiper.autoplay.running) {
			stop();
		} else {
			run();
		}
	}
	function onMouseEnter() {
		if (swiper.params.autoplay.disableOnInteraction) {
			stop();
		} else {
			emit('autoplayPause');
			pause();
		}
		['transitionend', 'webkitTransitionEnd'].forEach((event2) => {
			swiper.$wrapperEl[0].removeEventListener(event2, onTransitionEnd);
		});
	}
	function onMouseLeave() {
		if (swiper.params.autoplay.disableOnInteraction) {
			return;
		}
		swiper.autoplay.paused = false;
		emit('autoplayResume');
		run();
	}
	function attachMouseEvents() {
		if (swiper.params.autoplay.pauseOnMouseEnter) {
			swiper.$el.on('mouseenter', onMouseEnter);
			swiper.$el.on('mouseleave', onMouseLeave);
		}
	}
	function detachMouseEvents() {
		swiper.$el.off('mouseenter', onMouseEnter);
		swiper.$el.off('mouseleave', onMouseLeave);
	}
	on('init', () => {
		if (swiper.params.autoplay.enabled) {
			start();
			const document = getDocument();
			document.addEventListener('visibilitychange', onVisibilityChange);
			attachMouseEvents();
		}
	});
	on('beforeTransitionStart', (_s, speed, internal) => {
		if (swiper.autoplay.running) {
			if (internal || !swiper.params.autoplay.disableOnInteraction) {
				swiper.autoplay.pause(speed);
			} else {
				stop();
			}
		}
	});
	on('sliderFirstMove', () => {
		if (swiper.autoplay.running) {
			if (swiper.params.autoplay.disableOnInteraction) {
				stop();
			} else {
				pause();
			}
		}
	});
	on('touchEnd', () => {
		if (
			swiper.params.cssMode &&
			swiper.autoplay.paused &&
			!swiper.params.autoplay.disableOnInteraction
		) {
			run();
		}
	});
	on('destroy', () => {
		detachMouseEvents();
		if (swiper.autoplay.running) {
			stop();
		}
		const document = getDocument();
		document.removeEventListener('visibilitychange', onVisibilityChange);
	});
	Object.assign(swiper.autoplay, {
		pause,
		run,
		start,
		stop
	});
}
function isObject(o) {
	return (
		typeof o === 'object' &&
		o !== null &&
		o.constructor &&
		Object.prototype.toString.call(o).slice(8, -1) === 'Object'
	);
}
function extend(target, src) {
	const noExtend = ['__proto__', 'constructor', 'prototype'];
	Object.keys(src)
		.filter((key) => noExtend.indexOf(key) < 0)
		.forEach((key) => {
			if (typeof target[key] === 'undefined') target[key] = src[key];
			else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
				if (src[key].__swiper__) target[key] = src[key];
				else extend(target[key], src[key]);
			} else {
				target[key] = src[key];
			}
		});
}
function needsNavigation(params = {}) {
	return (
		params.navigation &&
		typeof params.navigation.nextEl === 'undefined' &&
		typeof params.navigation.prevEl === 'undefined'
	);
}
function needsPagination(params = {}) {
	return params.pagination && typeof params.pagination.el === 'undefined';
}
function needsScrollbar(params = {}) {
	return params.scrollbar && typeof params.scrollbar.el === 'undefined';
}
function uniqueClasses(classNames = '') {
	const classes = classNames
		.split(' ')
		.map((c) => c.trim())
		.filter((c) => !!c);
	const unique = [];
	classes.forEach((c) => {
		if (unique.indexOf(c) < 0) unique.push(c);
	});
	return unique.join(' ');
}
const paramsList = [
	'modules',
	'init',
	'_direction',
	'touchEventsTarget',
	'initialSlide',
	'_speed',
	'cssMode',
	'updateOnWindowResize',
	'resizeObserver',
	'nested',
	'focusableElements',
	'_enabled',
	'_width',
	'_height',
	'preventInteractionOnTransition',
	'userAgent',
	'url',
	'_edgeSwipeDetection',
	'_edgeSwipeThreshold',
	'_freeMode',
	'_autoHeight',
	'setWrapperSize',
	'virtualTranslate',
	'_effect',
	'breakpoints',
	'_spaceBetween',
	'_slidesPerView',
	'maxBackfaceHiddenSlides',
	'_grid',
	'_slidesPerGroup',
	'_slidesPerGroupSkip',
	'_slidesPerGroupAuto',
	'_centeredSlides',
	'_centeredSlidesBounds',
	'_slidesOffsetBefore',
	'_slidesOffsetAfter',
	'normalizeSlideIndex',
	'_centerInsufficientSlides',
	'_watchOverflow',
	'roundLengths',
	'touchRatio',
	'touchAngle',
	'simulateTouch',
	'_shortSwipes',
	'_longSwipes',
	'longSwipesRatio',
	'longSwipesMs',
	'_followFinger',
	'allowTouchMove',
	'_threshold',
	'touchMoveStopPropagation',
	'touchStartPreventDefault',
	'touchStartForcePreventDefault',
	'touchReleaseOnEdges',
	'uniqueNavElements',
	'_resistance',
	'_resistanceRatio',
	'_watchSlidesProgress',
	'_grabCursor',
	'preventClicks',
	'preventClicksPropagation',
	'_slideToClickedSlide',
	'_preloadImages',
	'updateOnImagesReady',
	'_loop',
	'_loopAdditionalSlides',
	'_loopedSlides',
	'_loopedSlidesLimit',
	'_loopFillGroupWithBlank',
	'loopPreventsSlide',
	'_rewind',
	'_allowSlidePrev',
	'_allowSlideNext',
	'_swipeHandler',
	'_noSwiping',
	'noSwipingClass',
	'noSwipingSelector',
	'passiveListeners',
	'containerModifierClass',
	'slideClass',
	'slideBlankClass',
	'slideActiveClass',
	'slideDuplicateActiveClass',
	'slideVisibleClass',
	'slideDuplicateClass',
	'slideNextClass',
	'slideDuplicateNextClass',
	'slidePrevClass',
	'slideDuplicatePrevClass',
	'wrapperClass',
	'runCallbacksOnInit',
	'observer',
	'observeParents',
	'observeSlideChildren',
	'a11y',
	'_autoplay',
	'_controller',
	'coverflowEffect',
	'cubeEffect',
	'fadeEffect',
	'flipEffect',
	'creativeEffect',
	'cardsEffect',
	'hashNavigation',
	'history',
	'keyboard',
	'lazy',
	'mousewheel',
	'_navigation',
	'_pagination',
	'parallax',
	'_scrollbar',
	'_thumbs',
	'virtual',
	'zoom'
];
function getParams(obj = {}, splitEvents = true) {
	const params = {
		on: {}
	};
	const events = {};
	const passedParams = {};
	extend(params, Swiper.defaults);
	extend(params, Swiper.extendedDefaults);
	params._emitClasses = true;
	params.init = false;
	const rest = {};
	const allowedParams = paramsList.map((key) => key.replace(/_/, ''));
	const plainObj = Object.assign({}, obj);
	Object.keys(plainObj).forEach((key) => {
		if (typeof obj[key] === 'undefined') return;
		if (allowedParams.indexOf(key) >= 0) {
			if (isObject(obj[key])) {
				params[key] = {};
				passedParams[key] = {};
				extend(params[key], obj[key]);
				extend(passedParams[key], obj[key]);
			} else {
				params[key] = obj[key];
				passedParams[key] = obj[key];
			}
		} else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === 'function') {
			if (splitEvents) {
				events[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
			} else {
				params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
			}
		} else {
			rest[key] = obj[key];
		}
	});
	['navigation', 'pagination', 'scrollbar'].forEach((key) => {
		if (params[key] === true) params[key] = {};
		if (params[key] === false) delete params[key];
	});
	return {
		params,
		passedParams,
		rest,
		events
	};
}
const Swiper_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ['class', 'tag', 'wrapperTag', 'swiper']);
	const dispatch = createEventDispatcher();
	let { class: className = void 0 } = $$props;
	let { tag = 'div' } = $$props;
	let { wrapperTag = 'div' } = $$props;
	let containerClasses = 'swiper';
	let swiperInstance = null;
	let paramsData;
	let swiperParams;
	let restProps;
	let swiperEl = null;
	let prevEl = null;
	let nextEl = null;
	let scrollbarEl = null;
	let paginationEl = null;
	let virtualData = { slides: [] };
	function swiper() {
		return swiperInstance;
	}
	const setVirtualData = (data) => {
		virtualData = data;
		tick().then(() => {
			swiperInstance.$wrapperEl.children('.swiper-slide').each((el) => {
				if (el.onSwiper) el.onSwiper(swiperInstance);
			});
			swiperInstance.updateSlides();
			swiperInstance.updateProgress();
			swiperInstance.updateSlidesClasses();
			if (swiperInstance.lazy && swiperInstance.params.lazy.enabled) {
				swiperInstance.lazy.load();
			}
		});
	};
	const calcParams = () => {
		paramsData = getParams($$restProps);
		swiperParams = paramsData.params;
		paramsData.passedParams;
		restProps = paramsData.rest;
	};
	calcParams();
	const onBeforeBreakpoint = () => {};
	swiperParams.onAny = (event2, ...args) => {
		dispatch(event2, args);
	};
	Object.assign(swiperParams.on, {
		_beforeBreakpoint: onBeforeBreakpoint,
		_containerClasses(_swiper, classes) {
			containerClasses = classes;
		}
	});
	swiperInstance = new Swiper(swiperParams);
	setContext('swiper', swiperInstance);
	if (swiperInstance.virtual && swiperInstance.params.virtual.enabled) {
		const extendWith = {
			cache: false,
			renderExternal: (data) => {
				setVirtualData(data);
				if (swiperParams.virtual && swiperParams.virtual.renderExternal) {
					swiperParams.virtual.renderExternal(data);
				}
			},
			renderExternalUpdate: false
		};
		extend(swiperInstance.params.virtual, extendWith);
		extend(swiperInstance.originalParams.virtual, extendWith);
	}
	onDestroy(() => {
		if (typeof window !== 'undefined' && swiperInstance && !swiperInstance.destroyed) {
			swiperInstance.destroy(true, false);
		}
	});
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
	if ($$props.wrapperTag === void 0 && $$bindings.wrapperTag && wrapperTag !== void 0)
		$$bindings.wrapperTag(wrapperTag);
	if ($$props.swiper === void 0 && $$bindings.swiper && swiper !== void 0)
		$$bindings.swiper(swiper);
	return `${((tag$1) => {
		return tag$1
			? `<${tag}${spread(
					[
						{
							class: escape_attribute_value(
								uniqueClasses(`${containerClasses}${className ? ` ${className}` : ''}`)
							)
						},
						escape_object(restProps)
					],
					{}
			  )}${add_attribute('this', swiperEl, 0)}>${
					is_void(tag$1)
						? ''
						: `${slots['container-start'] ? slots['container-start']({ virtualData }) : ``}
  ${((tag2) => {
		return tag2
			? `<${wrapperTag} class="${'swiper-wrapper'}">${
					is_void(tag2)
						? ''
						: `${slots['wrapper-start'] ? slots['wrapper-start']({ virtualData }) : ``}
    ${slots.default ? slots.default({ virtualData }) : ``}
    ${slots['wrapper-end'] ? slots['wrapper-end']({ virtualData }) : ``}`
			  }${is_void(tag2) ? '' : `</${tag2}>`}`
			: '';
	})(wrapperTag)}
  ${
		needsNavigation(swiperParams)
			? `<div class="${'swiper-button-prev'}"${add_attribute('this', prevEl, 0)}></div>
    <div class="${'swiper-button-next'}"${add_attribute('this', nextEl, 0)}></div>`
			: ``
	}
  ${
		needsScrollbar(swiperParams)
			? `<div class="${'swiper-scrollbar'}"${add_attribute('this', scrollbarEl, 0)}></div>`
			: ``
	}
  ${
		needsPagination(swiperParams)
			? `<div class="${'swiper-pagination'}"${add_attribute('this', paginationEl, 0)}></div>`
			: ``
	}
  ${slots['container-end'] ? slots['container-end']({ virtualData }) : ``}`
			  }${is_void(tag$1) ? '' : `</${tag$1}>`}`
			: '';
	})(tag)}`;
});
const Swiper_slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let slideData;
	let $$restProps = compute_rest_props($$props, ['zoom', 'virtualIndex', 'class']);
	let { zoom = void 0 } = $$props;
	let { virtualIndex = void 0 } = $$props;
	let { class: className = void 0 } = $$props;
	let slideEl = null;
	let slideClasses = 'swiper-slide';
	let swiper = getContext('swiper');
	const updateClasses = (_, el, classNames) => {
		if (el === slideEl) {
			slideClasses = classNames;
		}
	};
	const detachEvent = () => {
		if (!swiper) return;
		swiper.off('_slideClass', updateClasses);
	};
	onDestroy(() => {
		if (!swiper) return;
		detachEvent();
	});
	if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0) $$bindings.zoom(zoom);
	if ($$props.virtualIndex === void 0 && $$bindings.virtualIndex && virtualIndex !== void 0)
		$$bindings.virtualIndex(virtualIndex);
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	slideData = {
		isActive:
			slideClasses.indexOf('swiper-slide-active') >= 0 ||
			slideClasses.indexOf('swiper-slide-duplicate-active') >= 0,
		isVisible: slideClasses.indexOf('swiper-slide-visible') >= 0,
		isDuplicate: slideClasses.indexOf('swiper-slide-duplicate') >= 0,
		isPrev:
			slideClasses.indexOf('swiper-slide-prev') >= 0 ||
			slideClasses.indexOf('swiper-slide-duplicate-prev') >= 0,
		isNext:
			slideClasses.indexOf('swiper-slide-next') >= 0 ||
			slideClasses.indexOf('swiper-slide-duplicate-next') >= 0
	};
	return `<div${spread(
		[
			{
				class: escape_attribute_value(
					uniqueClasses(`${slideClasses}${className ? ` ${className}` : ''}`)
				)
			},
			{
				'data-swiper-slide-index': escape_attribute_value(virtualIndex)
			},
			escape_object($$restProps)
		],
		{}
	)}${add_attribute('this', slideEl, 0)}>${
		zoom
			? `<div class="${'swiper-zoom-container'}"${add_attribute(
					'data-swiper-zoom',
					typeof zoom === 'number' ? zoom : void 0,
					0
			  )}>${slots.default ? slots.default({ data: slideData }) : ``}</div>`
			: `${slots.default ? slots.default({ data: slideData }) : ``}`
	}</div>`;
});
const swiperBundle_min = '';
const SwiperContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { slidesNumber = 2 } = $$props;
	if ($$props.slidesNumber === void 0 && $$bindings.slidesNumber && slidesNumber !== void 0)
		$$bindings.slidesNumber(slidesNumber);
	return `${validate_component(Swiper_1, 'Swiper').$$render(
		$$result,
		{
			grabCursor: true,
			breakpoints: {
				768: {
					slidesPerView: slidesNumber,
					slidesPerGroup: slidesNumber
				}
			},
			spaceBetween: 8,
			slidesPerView: 1,
			pagination: { clickable: true, type: 'bullets' },
			scrollbar: { draggable: true },
			mousewheel: true,
			zoom: true,
			autoplay: {
				delay: 2e3,
				disableOnInteraction: false,
				pauseOnMouseEnter: true
			},
			modules: [Pagination, Scrollbar, Autoplay, Mousewheel]
		},
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const UIDesignPrinciples = '/_app/immutable/assets/UIDesignPrinciples-ac851ee4.webp';
const DesignManual = '/_app/immutable/assets/DesignManual-772d2efc.webp';
const NoBSGuideUX = '/_app/immutable/assets/NoBSGuideUX-e53beb32.webp';
const Sprint = '/_app/immutable/assets/Sprint-517ee615.webp';
const JustEnoughResearch = '/_app/immutable/assets/JustEnoughResearch-696767d8.webp';
const CoolBook_svelte_svelte_type_style_lang = '';
const css$3 = {
	code: '.book-container.svelte-5le5br.svelte-5le5br{align-items:center;display:flex;height:auto;justify-content:center;perspective:600px;width:100%}@keyframes svelte-5le5br-initAnimation{0%{transform:rotateY(0deg)}to{transform:rotateY(-30deg)}}.book.svelte-5le5br.svelte-5le5br{animation:svelte-5le5br-initAnimation 1s ease 0s 1;height:300px;position:relative;transform:rotateY(-30deg);transform-style:preserve-3d;transition:1s ease;width:200px}.book.svelte-5le5br.svelte-5le5br:hover{transform:rotateY(0deg)}.book.svelte-5le5br>.svelte-5le5br:first-child{background-color:#01060f;border-radius:0 2px 2px 0;height:300px;left:0;position:absolute;top:0;transform:translateZ(25px);width:200px}.book.svelte-5le5br.svelte-5le5br:before{background:linear-gradient(90deg,#fff,#f9f9f9 5%,#fff 10%,#f9f9f9 15%,#fff 20%,#f9f9f9 25%,#fff 30%,#f9f9f9 35%,#fff 40%,#f9f9f9 45%,#fff 50%,#f9f9f9 55%,#fff 60%,#f9f9f9 65%,#fff 70%,#f9f9f9 75%,#fff 80%,#f9f9f9 85%,#fff 90%,#f9f9f9 95%,#fff);height:294px;top:3px;transform:translateX(172px) rotateY(90deg);width:48px}.book.svelte-5le5br.svelte-5le5br:after,.book.svelte-5le5br.svelte-5le5br:before{content:" ";left:0;position:absolute}.book.svelte-5le5br.svelte-5le5br:after{background-color:var(--neutral-900);border-radius:0 2px 2px 0;height:300px;top:0;transform:translateZ(-25px);width:200px}.book.svelte-5le5br.svelte-5le5br{scale:.7}',
	map: null
};
const CoolBook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { bookUrl = '' } = $$props;
	let { alt = '' } = $$props;
	let { imgUrl = '' } = $$props;
	if ($$props.bookUrl === void 0 && $$bindings.bookUrl && bookUrl !== void 0)
		$$bindings.bookUrl(bookUrl);
	if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
	if ($$props.imgUrl === void 0 && $$bindings.imgUrl && imgUrl !== void 0)
		$$bindings.imgUrl(imgUrl);
	$$result.css.add(css$3);
	return `<a class="${'book-container svelte-5le5br'}"${add_attribute(
		'href',
		bookUrl,
		0
	)} target="${'_blank'}" rel="${'noreferrer noopener'}"><div class="${'book svelte-5le5br'}"><img loading="${'lazy'}" decoding="${'async'}"${add_attribute(
		'alt',
		alt,
		0
	)}${add_attribute('src', imgUrl, 0)} class="${'svelte-5le5br'}"></div>
</a>`;
});
const BookGallery_svelte_svelte_type_style_lang = '';
const css$2 = {
	code: '.books.svelte-195ax4u{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;width:100%}@media(min-width:768px){.books.svelte-195ax4u{gap:var(--space-xl)}}',
	map: null
};
const BookGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let books = [
		{
			name: 'Just Enough Research',
			imgUrl: JustEnoughResearch,
			bookUrl: 'https://terabox.com/s/1BXO6sku01d2yUm-IGH1l-A'
		},
		{
			name: 'UI Design Principles',
			imgUrl: UIDesignPrinciples,
			bookUrl: 'https://matix.li/56ca135e203d'
		},
		{
			name: 'Design Manual',
			imgUrl: DesignManual,
			bookUrl: 'https://matix.li/92ee7d7f4bad'
		},
		{
			name: 'NoBSGuideUX',
			imgUrl: NoBSGuideUX,
			bookUrl: 'https://matix.li/0794035223cd'
		},
		{
			name: 'Sprint',
			imgUrl: Sprint,
			bookUrl: 'https://matix.li/92648755b3ce'
		}
	];
	$$result.css.add(css$2);
	return `<div class="${'books svelte-195ax4u'}">${validate_component(
		SwiperContainer,
		'SwiperContainer'
	).$$render(
		$$result,
		{},
		{},
		{
			default: () => {
				return `${each(books, (book) => {
					return `${validate_component(Swiper_slide, 'SwiperSlide').$$render(
						$$result,
						{},
						{},
						{
							default: () => {
								return `${validate_component(CoolBook, 'CoolBook').$$render(
									$$result,
									{
										imgUrl: book.imgUrl,
										alt: book.name,
										bookUrl: book.bookUrl
									},
									{},
									{}
								)}
			`;
							}
						}
					)}`;
				})}`;
			}
		}
	)}
</div>`;
});
const ResourceCard_svelte_svelte_type_style_lang = '';
const css$1 = {
	code: '.tool.svelte-mozove.svelte-mozove{background-color:var(--bg-400);border:1px solid transparent;border-radius:var(--border-radius);box-shadow:var(--box-shadow-1);display:flex;flex-direction:column;height:200px;padding:var(--space-m);transition:var(--transition);width:100%}.tool__name.svelte-mozove.svelte-mozove{color:var(--text-color);font-weight:500;margin-bottom:var(--space-xs)}.tool__description.svelte-mozove.svelte-mozove{-webkit-line-clamp:3;-webkit-box-orient:vertical;color:var(--text-color-low);display:-webkit-box;font-weight:400;margin:0;overflow:hidden}.tool.svelte-mozove.svelte-mozove:hover{border:1px solid var(--primary-500)}.tool.svelte-mozove:hover .tool__name.svelte-mozove{color:var(--primary-500)}',
	map: null
};
const ResourceCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { href = '' } = $$props;
	let { name = '' } = $$props;
	let { desc = '' } = $$props;
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
	$$result.css.add(css$1);
	return `${validate_component(ExLink, 'ExLink').$$render(
		$$result,
		{ href, ariaLabel: name },
		{},
		{
			default: () => {
				return `<div class="${'tool svelte-mozove'}"><h2 class="${'tool__name base-text svelte-mozove'}">${escape(
					name
				)}</h2>
		<div class="${'tool__description small-text svelte-mozove'}">${escape(desc)}</div></div>`;
			}
		}
	)}`;
});
const ResourceCardList_svelte_svelte_type_style_lang = '';
const css = {
	code: '.tools.svelte-3b3evm{--min:40ch;--gap:var(--space-l);grid-gap:var(--gap);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,var(--min)),1fr))}',
	map: null
};
const ResourceCardList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return `<div class="${'tools svelte-3b3evm'}">${validate_component(
		ResourceCard,
		'ResourceCard'
	).$$render(
		$$result,
		{
			href: 'https://www.userinterviews.com/',
			name: 'User Interviews',
			desc: 'Recruit participants from a community of 125,000 members based on profession, demographics,\r\n	geography and more, for any kind of research.'
		},
		{},
		{}
	)}

	${validate_component(ResourceCard, 'ResourceCard').$$render(
		$$result,
		{
			href: 'https://appoint.ly',
			name: 'Appoint.ly',
			desc: 'A web-based scheduling tool that helps to schedule meetings quickly through the integration with calendars online.'
		},
		{},
		{}
	)}

	${validate_component(ResourceCard, 'ResourceCard').$$render(
		$$result,
		{
			href: 'https://crowdsignal.com',
			name: 'Crowd Signal',
			desc: 'Collect, organize and analyze data from a variety of sources, including social media.'
		},
		{},
		{}
	)}

	${validate_component(ResourceCard, 'ResourceCard').$$render(
		$$result,
		{
			href: 'https://www.jotform.com',
			name: 'Jotform',
			desc: 'Create online forms, get an email for each response, collect data.'
		},
		{},
		{}
	)}

	${validate_component(ResourceCard, 'ResourceCard').$$render(
		$$result,
		{
			href: 'https://minetime.ai',
			name: 'MineTime',
			desc: 'A free calendar app with smart scheduling and time analytics features.'
		},
		{},
		{}
	)}

	${validate_component(ResourceCard, 'ResourceCard').$$render(
		$$result,
		{
			href: 'https://www.surveymonkey.com',
			name: 'Survey Monkey',
			desc: 'Online survey tool to capture the voices and opinions of the people who matter most to you.'
		},
		{},
		{}
	)}

	${validate_component(ResourceCard, 'ResourceCard').$$render(
		$$result,
		{
			href: 'https://www.yesinsights.com',
			name: 'YesInsights',
			desc: 'Simple one question and NPS surveys to improve your business.'
		},
		{},
		{}
	)}
</div>`;
});
const Books = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg${spread(
		[{ viewBox: '0 0 256 256' }, { width: '1.2em' }, { height: '1.2em' }, escape_object($$props)],
		{}
	)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m233.6 195.6l-8.3-30.9L192.2 41a16 16 0 0 0-19.6-11.3L141.7 38l-1 .3A16 16 0 0 0 128 32H96a15.8 15.8 0 0 0-8 2.2a15.8 15.8 0 0 0-8-2.2H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h32a15.8 15.8 0 0 0 8-2.2a15.8 15.8 0 0 0 8 2.2h32a16 16 0 0 0 16-16v-99.6l19.5 72.8l8.3 30.9a16 16 0 0 0 15.5 11.9a19.9 19.9 0 0 0 4.1-.5l30.9-8.3a15.9 15.9 0 0 0 9.7-7.5a15.6 15.6 0 0 0 1.6-12.1ZM156.2 92.1l30.9-8.3l20.7 77.3l-30.9 8.3Zm20.5-46.9l6.3 23.1l-30.9 8.3l-6.3-23.1ZM128 48v120H96V48Zm-48 0v24H48V48ZM48 208V88h32v120Zm80 0H96v-24h32v24Zm90.2-8.3l-30.9 8.3l-6.3-23.2l31-8.3l6.2 23.2Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Hard_drives = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg${spread(
		[{ viewBox: '0 0 256 256' }, { width: '1.2em' }, { height: '1.2em' }, escape_object($$props)],
		{}
	)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M208 136H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16Zm0 64H48v-48h160v48Zm0-160H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 64H48V56h160v48Zm-16-24a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm0 96a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Flask = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg${spread(
		[{ viewBox: '0 0 256 256' }, { width: '1.2em' }, { height: '1.2em' }, escape_object($$props)],
		{}
	)}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M223.6 199.8L160 93.8V40h8a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h8v53.8l-40.2 66.9c0 .1-.1.2-.1.3l-23.3 38.8A16 16 0 0 0 46.1 224h163.8a16 16 0 0 0 13.7-24.2ZM109.7 102a15.9 15.9 0 0 0 2.3-8.2V40h32v53.8a15.9 15.9 0 0 0 2.3 8.2l38.8 64.8c-13.1 7.1-31.4 5.1-53.5-6c-14.3-7.1-32.7-13.5-50.3-11.4ZM46.1 208l22.5-37.4c13.2-8.7 32.4-7.1 55.8 4.6c17.3 8.6 31.5 11.8 43.2 11.8a51.4 51.4 0 0 0 25.8-6.5l16.5 27.5Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${
		(($$result.head += `<!-- HEAD_svelte-6oa2mc_START -->${
			(($$result.title = `<title>Resource</title>`), '')
		}<!-- HEAD_svelte-6oa2mc_END -->`),
		'')
	}

${validate_component(PageTitle, 'PageTitle').$$render($$result, { pageTitle: 'Resource' }, {}, {})}

<section>${validate_component(SectionTitle, 'SectionTitle').$$render(
		$$result,
		{ sectionTitle: 'Book' },
		{},
		{
			default: ({ sectionIcon }) => {
				return `${validate_component(Books, 'Books').$$render(
					$$result,
					Object.assign({}, sectionIcon),
					{},
					{}
				)}`;
			}
		}
	)}
	${validate_component(SectionDesc, 'SectionDesc').$$render(
		$$result,
		{
			text: "Knowledge should be free so I'm sharing it."
		},
		{},
		{}
	)}

	${validate_component(BookGallery, 'BookGallery').$$render($$result, {}, {}, {})}</section>

<section>${validate_component(SectionTitle, 'SectionTitle').$$render(
		$$result,
		{ sectionTitle: 'User Research Tool' },
		{},
		{
			default: ({ sectionIcon }) => {
				return `${validate_component(Flask, 'Flask').$$render(
					$$result,
					Object.assign({}, sectionIcon),
					{},
					{}
				)}`;
			}
		}
	)}

	${validate_component(SectionDesc, 'SectionDesc').$$render(
		$$result,
		{
			text: 'User research helps you understand user behaviors, needs, and motivations through various qualitative and quantitative methods (interviews, observation, forms, etc).'
		},
		{},
		{}
	)}

	${validate_component(ResourceCardList, 'ToolCardList').$$render($$result, {}, {}, {})}</section>

<section>${validate_component(SectionTitle, 'SectionTitle').$$render(
		$$result,
		{ sectionTitle: 'Other' },
		{},
		{
			default: ({ sectionIcon }) => {
				return `${validate_component(Hard_drives, 'HardDrives').$$render(
					$$result,
					Object.assign({}, sectionIcon),
					{},
					{}
				)}`;
			}
		}
	)}

	${validate_component(OtherCardList, 'OtherCardList').$$render($$result, {}, {}, {})}</section>`;
});
export { Page as default };
