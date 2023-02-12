//valor por referencia
const nomes = ['jessica', 'marcelo', 'juliana'];
// string, objetos, funções, números
//portanto nao reflete em nomes
const novo = [...nomes];
nomes[2] = 'marlene';
novo.pop();
const removido = nomes.shift();
// delete nomes[2];
nomes.push('camila');
nomes.unshift('jessica');
const novo1 = nomes.slice(0, 2);
console.log(nomes);
console.log(novo1);

const nome = 'jessi rafaeli baron';
const nomess = nome.split(' ');

console.log(nomess);
