// map altera os valores do array - vai ter sempre o tamanho do array original

// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 8, 11, 15, 22, 27];
// const double = numeros.map((valor) => valor * 2);
// console.log(double);

const pessoas = [
	{ nome: 'camila', idade: 29 },
	{ nome: 'larissa', idade: 39 },
	{ nome: 'jesi', idade: 30 },
	{ nome: 'lucas', idade: 15 },
];

//retornar uma string com o nome da pessoa
// const nomeString = pessoas.map((valor) => valor.nome);
// console.log(nomeString);

// remova a chave nome
// const semNome = pessoas.map((valor) => valor.idade);
// console.log(semNome);
// const idades = pessoas.map((obj) => {
// 	return { idade: obj.idade };
// });
// console.log(idades);

// add ID no objeto
const criaID = pessoas.map((obj, indice) => {
	const newObj = { ...obj };
	newObj.id = indice + 1;
	return newObj;
});
console.log(pessoas);

console.log(criaID);
