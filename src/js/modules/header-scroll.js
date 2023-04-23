export default () => {
	const header = document.querySelector(".header");

	let prevScrollPos = window.scrollY;

	console.log(prevScrollPos);

	console.dir(window);

	window.addEventListener("scroll", () => {
		let currentScrollPos = window.scrollY;

		if (prevScrollPos > currentScrollPos) {
			header.classList.add("active");
			header.style.top = `0px`;
		} else {
			header.classList.remove("active");
			header.style.top = `-100px`;
		}

		prevScrollPos = currentScrollPos;
	});
};
