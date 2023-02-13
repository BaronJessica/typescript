// FILTER = filtra o array - Somente array - Metodo filter recebe uma função de callback
// precisa retornar um booleano
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 8, 11, 15, 22, 27];

// function callbackFilter(valor) {
// 	return valor > 10;
// if (numeros > 10) {
// 	return true;
// } else {
// 	return false;
// }
//}
// const numerosFiltrados = numeros.filter(callbackFilter);

const numerosFiltrados = numeros.filter((valor) => valor > 10);

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
// 	console.log(valor, indice, array);
// 	return valor > 10;
// });

// console.log(numerosFiltrados);
const pessoas = [
	{ nome: 'camila', idade: 29 },
	{ nome: 'larissa', idade: 39 },
	{ nome: 'jesi', idade: 30 },
	{ nome: 'lucas', idade: 15 },
];
// const fiveCaract = pessoas.filter((obj) => obj.nome.length >= 6);

// console.log(fiveCaract);

// const moreFifthy = pessoas.filter((obj) => obj.idade > 28);
// console.log(moreFifthy);

const terminateA = pessoas.filter((obj) => {
	return obj.nome.toLocaleLowerCase().endsWith('a');
});
console.log(terminateA);
