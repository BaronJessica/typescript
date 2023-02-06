//função construtura -> objetos
//função fabrica => objetos
//construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
	const ID = 123;
	const metodoInt = function () {};

	//atributos ou metodos públicos
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.metodo = function () {
		console.log(this.nome + ': Sou um metodo');
	};
}

const p1 = new Pessoa('jessica', 'rafaeli baron');
console.log(p1.nome);
p1.metodo();
