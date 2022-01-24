export function init() {
	class Footer extends HTMLElement {
		constructor() {
			super();
			this.render();
		}
		render() {
			this.innerText = 'Footer';
			this.style.backgroundColor = '#FFA0EA';
			this.style.height = '233px';
			this.style.fontSize = '22px';
			this.style.display = 'flex';
			this.style.alignItems = 'center';
			this.style.justifyContent = 'center';
		}
	}
	customElements.define('custom-footer', Footer);
}
