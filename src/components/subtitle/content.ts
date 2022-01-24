export function init() {
	class LoremField extends HTMLElement {
		constructor() {
			super();
			this.render();
		}

		render() {
			const shadow = this.attachShadow({ mode: 'open' });
			const style = document.createElement('style');
			style.innerHTML = `
      .root{
        display: flex;
        flex-direction: column;
        font-size: 18px;
      }
      `;

			const div = document.createElement('div');
			div.classList.add('root');

			div.innerHTML = `
      <p class="lorem">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, accusantium, nostrum labore iusto dolorum minus sequi tempora debitis minima voluptates modi error, tenetur fuga possimus quo cupiditate aliquam reiciendis quidem?</p>
      <p class="lorem">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, accusantium, nostrum labore iusto dolorum minus sequi tempora debitis minima voluptates modi error, tenetur fuga possimus quo cupiditate aliquam reiciendis quidem?</p>
      `;

			shadow.appendChild(style);
			shadow.appendChild(div);
		}
	}
	customElements.define('lorem-field', LoremField);
}
