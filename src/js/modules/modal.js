export default () => {
	const page = document.body;
	const btns = document.querySelectorAll("[data-modal-btn]");
	const modals = document.querySelectorAll("[data-modal]");

	const handleModal = ({ target }, modal) => {
		if (
			target.classList.contains("modal") ||
			target.classList.contains("modal__close")
		) {
			modal.classList.remove("open");
			page.classList.remove("page_lock");
		}
	};

	btns.forEach((btn) => {
		btn.addEventListener("click", () => {
			const btnData = btn.dataset.modalBtn;
			const modal = document.querySelector(`[data-modal='${btnData}']`);

			modals.forEach((item) => {
				item.classList.remove("open");
			});

			modal.classList.add("open");
			page.classList.add("page_lock");

			modal.addEventListener("click", ({ target }) => {
				handleModal({ target }, modal);
			});

			window.addEventListener("keydown", (e) => {
				if (e.key === "Escape") {
					modal.classList.remove("open");
					page.classList.remove("page_lock");
				}
			});
		});
	});
};
