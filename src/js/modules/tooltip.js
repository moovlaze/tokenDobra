import tippy from "tippy.js";

export default () => {
	tippy("[data-tippy-content]", {
		animation: "scale",
		theme: "default",
	});
};
