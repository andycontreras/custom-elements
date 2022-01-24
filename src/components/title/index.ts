export function init() {
	class Title extends HTMLElement {
		constructor() {
			super();
			this.render();
		}

		render() {
			this.innerText = 'Soy un título';
			this.style.fontSize = '50px';
			this.style.textAlign = 'center';
			this.style.fontWeight = 'bold';
		}
	}
	customElements.define('title-main', Title);
}
