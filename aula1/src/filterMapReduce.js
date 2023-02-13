const numeros = [1, 2, 3, 4, 5, 6, 50, 92, 13, 25];
const numerosPares = numeros
	.filter((valor) => valor % 2 === 0)
	.map((valor) => valor * 2)
	.reduce((ac, valor) => ac + valor);

console.log(numerosPares);
