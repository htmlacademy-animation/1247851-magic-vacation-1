// modules
import mobileHeight from "./modules/mobile-height-adjust.js";
import slider from "./modules/slider.js";
import menu from "./modules/menu.js";
import footer from "./modules/footer.js";
import chat from "./modules/chat.js";
import result from "./modules/result.js";
import form from "./modules/form.js";
import social from "./modules/social.js";
import FullPageScroll from "./modules/full-page-scroll";
import base from "./modules/base";
import {accentTypographyBuild} from "./modules/text-animation";

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
base();
const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

accentTypographyBuild(`.intro__title`, 500, `transform`, 0);
accentTypographyBuild(`.intro__date`, 500, `transform`, 700);
accentTypographyBuild(`.slider__item-title`, 500, `transform`, 0);
accentTypographyBuild(`.prizes__title`, 500, `transform`, 0);
