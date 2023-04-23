export default () => {
	const burgerBtn = document.getElementById("burger");

	burgerBtn.addEventListener("click", () => {
		const headerBody = document.querySelector(".header__body");
		const page = document.body;

		headerBody.classList.toggle("open");
		page.classList.toggle("page_lock");

		headerBody.addEventListener("click", ({ target }) => {
			if (target.classList.contains("header__item-link_close")) {
				headerBody.classList.remove("open");
				page.classList.remove("page_lock");
			}
		});
	});
};
