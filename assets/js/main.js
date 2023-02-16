function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        clearDisplay() {
            this.display.value = '';
        },

        apagarUmCampo() {
            this.display.value = this.display.value.slice(0, -1);
        },

        inicia() {
            this.cliqueBotoes();
            this.pressionarEnter();
        },

        pressionarEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaOperacao();
                }
            });
        },

        realizaOperacao() {
            let operacao = this.display.value;

            try {
                operacao = eval(operacao);

                if(!operacao) {
                    alert('Operação inválida!');
                    return;
                }
                this.display.value = String(operacao);
            } catch (error) {
                alert('Operação inválida!');
            }
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagarUmCampo();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaOperacao();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();