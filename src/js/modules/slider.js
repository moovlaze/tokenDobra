import Swiper, { Scrollbar } from "swiper";

export default () => {
	if (window.innerWidth >= 768) return;
	const swiper = new Swiper(".row-fonds__slider", {
		slidesPerView: 1.2,
		spaceBetween: 15,
		freeMode: true,
		breakpoints: {
			576: {
				slidesPerView: 2.3,
			},
			424: {
				slidesPerView: 1.6,
			},
		},
		modules: [Scrollbar],
		scrollbar: {
			el: ".swiper-scrollbar",
			draggable: true,
		},
	});
};
