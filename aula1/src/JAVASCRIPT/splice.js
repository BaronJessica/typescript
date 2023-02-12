// nomes.splice(indice atual, delete, el1, el2, el3...)
const nomes = ['maria', 'joao', 'jessica', 'lucas', 'camila'];

const removidos = nomes.splice(-2, Number.MAX_VALUE);
const adiciona = nomes.splice(3, 2, 'fernando', 'solange');

// const remov = nomes.splice(0, 1);
// console.log(remov);
// nomes.splice(nomes.length, 0, 'edward');
nomes.splice(0, 0, 'edward', 'otavio');
console.log(nomes);
// console.log(nomes, removidos);
// console.log(Number.MAX_VALUE);
// console.log(adiciona);
