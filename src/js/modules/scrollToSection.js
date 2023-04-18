export default () => {
	const btns = document.querySelectorAll("[data-scroll-btn]");
	const sections = document.querySelectorAll("[data-scroll-section]");

	if (!btns || !sections) return;

	btns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();

			const currentSection = document.querySelector(
				`[data-scroll-section='${btn.dataset.scrollBtn}']`
			);

			currentSection.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		});
	});
};
