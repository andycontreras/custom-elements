export function init() {
	class Header extends HTMLElement {
		constructor() {
			super();
			this.render();
		}

		render() {
			this.innerText = 'Header';
			this.style.height = '60px';
			this.style.background = '#FF8282';
			this.style.fontSize = '22px';
			this.style.display = 'flex';
			this.style.justifyContent = 'center';
			this.style.alignItems = 'center';

			const query = window.matchMedia('(min-width: 600px)');
			if (query.matches) {
				this.style.height = '80px';
			}
		}
	}
	customElements.define('custom-header', Header);
}
