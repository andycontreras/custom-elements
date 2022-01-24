import { init as initHeaderEl } from './components/header/index';
import { init as initTextFieldEl } from './components/text-field/index';
import { init as initFooterEl } from './components/footer/index';
import { init as initTitleEl } from './components/title/index';
import { init as initSubtitleEl } from './components/subtitle/subtitle';
import { init as initLoremEl } from './components/subtitle/content';

(function main() {
	initHeaderEl();
	initTitleEl();
	initSubtitleEl();
	initLoremEl();
	initTextFieldEl();
	initFooterEl();
})();
