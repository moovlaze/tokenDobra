export default () => {
	const accordionsItems = document.querySelectorAll(
		".accordion .accordeon__item"
	);

	accordionsItems.forEach((item) => {
		item.addEventListener("click", () => {
			let btn = item.querySelector(".accordeon__item-btn");
			let content = item.querySelector(".accordeon__item-content");

			accordionsItems.forEach((el) => {
				btn = el.querySelector(".accordeon__item-btn");
				content = el.querySelector(".accordeon__item-content");

				el.classList.remove("open");
				btn.setAttribute("aria-expanded", false);
				content.setAttribute("aria-hidden", true);
			});

			btn = item.querySelector(".accordeon__item-btn");
			content = item.querySelector(".accordeon__item-content");

			item.classList.add("open");

			if (item.classList.contains("open")) {
				btn.setAttribute("aria-expanded", true);
				content.setAttribute("aria-hidden", false);
			} else {
				btn.setAttribute("aria-expanded", false);
				content.setAttribute("aria-hidden", true);
			}
		});
	});
};
