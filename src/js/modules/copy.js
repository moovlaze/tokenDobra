export default () => {
	const btns = document.querySelectorAll("[data-copy-btn]");

	btns.forEach((btn) => {
		btn.addEventListener("click", () => {
			const box = document.querySelector(
				`[data-copy-box='${btn.dataset.copyBtn}']`
			);

			navigator.clipboard.writeText(box.innerHTML);
		});
	});
};
