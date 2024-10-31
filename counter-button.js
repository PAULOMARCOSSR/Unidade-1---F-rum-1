class CounterButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.count = 0;

        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    text-align: center;
                    border: 2px solid #007bff;
                    border-radius: 10px;
                    padding: 20px;
                    background-color: #f8f9fa;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                button {
                    padding: 10px 15px;
                    font-size: 16px;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                #increase {
                    background-color: #28a745; /* Verde */
                }
                #decrease {
                    background-color: #dc3545; /* Vermelho */
                }
                button:hover {
                    opacity: 0.8;
                }
                .count {
                    font-size: 20px;
                    margin-top: 10px;
                }
            </style>
            <button id="increase">Aumentar</button>
            <button id="decrease">Diminuir</button>
            <div class="count">Contagem: <span id="countValue">${this.count}</span></div>
        `;

        this.shadowRoot.querySelector('#increase').addEventListener('click', () => this.increase());
        this.shadowRoot.querySelector('#decrease').addEventListener('click', () => this.decrease());
    }

    increase() {
        this.count++;
        this.updateCount();
    }

    decrease() {
        this.count--;
        this.updateCount();
    }

    updateCount() {
        this.shadowRoot.querySelector('#countValue').textContent = this.count;
    }
}

customElements.define('counter-button', CounterButton);