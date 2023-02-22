//prototipo = molde, modelo

//construtora -> molde (classe)

function Pessoa(nome, sobrenome) {
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}
Pessoa.prototype.estouAqui = 'hahahah';

const pessoa1 = new Pessoa('jessica', 'baron');
const data = new Date();
const p2 = new Pessoa('Aurora', 'baron');

console.dir(pessoa1.nomeCompleto);
