export default () => {
	const input = document.querySelector(".informaton__right-form-input");

	if (!input) return;

	const baseInput = document.querySelector("input[type='number']");
	const inputText = input.querySelector(".informaton__right-form-input-text");
	const plus = input.querySelector(
		".informaton__right-form-input-btns-btn_plus"
	);
	const minus = input.querySelector(
		".informaton__right-form-input-btns-btn_minus"
	);

	let count = 1;
	let min = 1;

	const renderInputText = () => {
		inputText.textContent = `${count} pre-NFT`;
		baseInput.value = `${count}`;
	};

	const handlePlus = () => {
		count++;
		renderInputText(count);
	};

	const handleMinus = () => {
		if (count <= min) return;
		count--;
		renderInputText(count);
	};

	plus.addEventListener("click", handlePlus);
	minus.addEventListener("click", handleMinus);
};
