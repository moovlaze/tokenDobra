export default () => {
	const headerHeight = document.querySelector(".header").clientHeight;
	const btns = document.querySelectorAll("[data-scroll-btn]");
	const sections = document.querySelectorAll("[data-scroll-section]");

	if (!btns || !sections) return;

	btns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();

			const currentSection = document.querySelector(
				`[data-scroll-section='${btn.dataset.scrollBtn}']`
			);

			window.scroll({
				left: 0,
				top: currentSection.offsetTop - headerHeight,
				behavior: "smooth",
			});
		});
	});
};
