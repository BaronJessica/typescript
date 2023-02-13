//Reduce, mais utilizado para reduzir o array em unico elemento

const numeros = [1, 2, 3, 4, 5, 6];
const total = numeros.reduce(function (acumulador, valor, indice, array) {
	// acumulador += valor;
	if (valor % 2 !== 0) {
		acumulador += valor;
		console.log(valor);
	}
	return acumulador;
}, 0);
console.log(total);

const pessoas = [
	{ nome: 'rosana', idade: 64 },
	{ nome: 'rose', idade: 20 },
	{ nome: 'marlene', idade: 60 },
];

const older = pessoas.reduce((acumulador, valor) => {
	if (acumulador.idade > valor.idade) return acumulador;
	return valor;
}, 0);

console.log(older);
