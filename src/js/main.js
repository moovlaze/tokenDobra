import burger from "./modules/burger.js";
import articleSection from "./modules/article-section.js";
import tooltip from "./modules/tooltip.js";
import slider from "./modules/slider.js";
import accordion from "./modules/accordion.js";
import modal from "./modules/modal.js";
import scrollToSection from "./modules/scrollToSection.js";
import copy from "./modules/copy.js";

burger();
articleSection({
	quantity: 4,
	selector: ".works__article",
});
articleSection({
	quantity: 6,
	selector: ".products__article",
	breakpoint: 768,
});
tooltip();
slider();
accordion();
modal();
scrollToSection();
copy();
