//IIFE -> Immediately invoked function expression

(function (idade, peso, altura) {
	const sobrenome = 'rafaeli';
	function criaNome(nome) {
		return nome + ' ' + sobrenome;
	}
	function falaNome() {
		console.log(criaNome('Jessica'));
	}
	falaNome();
	console.log(idade, peso, altura);
})(30, 80, 1.8);
