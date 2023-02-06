function Calculadora() {
	this.display = document.querySelector('.display');
	this.capClick = () => {
		document.addEventListener('click', (event) => {
			const el = event.target;
			if (el.classList.contains('btn-num')) this.addNumDisplay(el);
			if (el.classList.contains('btn-clear')) this.clear();
			if (el.classList.contains('btn-del')) this.del();
			if (el.classList.contains('btn-eq')) this.realizaConta(el);
		});
	};
	this.addNumDisplay = (el) => (this.display.value += el.innerText);
	this.clear = () => (this.display.value = '');
	this.inicia = () => {
		this.capClick();
		this.capEnter();
	};
	this.del = () => (this.display.value = this.display.value.slice(0, -1));
	this.capEnter = () => {
		document.addEventListener('keypress', (e) => {
			if (e.keyCode === 13) return;
			this.realizaConta();
		});
	};
	this.realizaConta = () => {
		try {
			const conta = eval(this.display.value);
			if (!conta) {
				alert('conta inválida');
				return;
			}
			this.display.value = conta;
		} catch (e) {
			alert('conta invalida');
			return;
		}
	};
}

const calculadora = new Calculadora();
calculadora.inicia();
