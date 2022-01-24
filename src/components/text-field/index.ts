export function init() {
	class TextField extends HTMLElement {
		constructor() {
			super();
			this.render();
		}

		render() {
			const shadow = this.attachShadow({ mode: 'open' });
			const label = this.getAttribute('label');

			const style = document.createElement('style');
			style.innerHTML = `
      .root{
        display: flex;
        flex-direction: column;
      }

      .label{
        font-size: 16px;
        font-family: 'poppins';
      }
      
      .input{
        font-size: 16px;
        padding: 17px 13px;
        margin-top: 3px;
        border-radius: 4px;
      }
      
      .enviar{
        background-color: #9CBBE9;
        margin-top: 16px;
        height: 55px;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        padding: 15px auto
      }

      .volver{
        background-color: white;
        margin-top: 69px;
        height: 55px;
        font-size: 16px;
        border: solid 2px black;
        border-radius: 4px;
        padding: 15px auto
      }

      `;
			const div = document.createElement('div');
			div.classList.add('root');

			div.innerHTML = `
      <label class="label">${label}</label>
      <input class="input" type="text" placeholder="ingrese su ${label}"/>
      <button class="enviar"> Enviar </button>
      <button class="volver"> Volver </button>
      `;

			shadow.appendChild(style);
			shadow.appendChild(div);
		}
	}
	customElements.define('text-field', TextField);
}
