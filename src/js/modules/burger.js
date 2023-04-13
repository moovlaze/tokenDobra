export default () => {
	const burgerBtn = document.getElementById("burger");

	burgerBtn.addEventListener("click", () => {
		const headerBody = document.querySelector(".header__body");
		const page = document.body;

		headerBody.classList.toggle("open");
		page.classList.toggle("page_lock");
	});
};
