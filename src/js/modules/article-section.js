export default ({ quantity, selector, breakpoint = 992 }) => {
	const elems = document.querySelectorAll(selector);

	if (window.innerWidth < breakpoint) {
		elems.forEach((article, index) => {
			if (index > quantity) {
				article.remove();
			}
		});
	}
};
