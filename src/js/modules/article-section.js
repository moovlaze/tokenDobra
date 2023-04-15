export default () => {
	const articleWorksAll = document.querySelectorAll(".article-works");

	if (window.innerWidth < 992) {
		articleWorksAll.forEach((article, index) => {
			if (index > 4) {
				article.remove();
			}
		});
	}
};
