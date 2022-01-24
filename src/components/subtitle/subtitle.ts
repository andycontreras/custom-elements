export function init() {
	class Subtitle extends HTMLElement {
		constructor() {
			super();
			this.render();
		}

		render() {
			this.innerText = 'Soy un Subtítulo';
			this.style.fontSize = '30px';
			this.style.fontWeight = 'bold';
			this.style.marginTop = '40px';
			// this.style.textAlign = 'center';
		}
	}
	customElements.define('subtitle-main', Subtitle);
}
