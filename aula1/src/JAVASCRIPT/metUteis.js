const produto = {
	nome: 'caneca',
	preco: 1.8,
};
// const outraCoisa = {
// 	...produto,
// 	material: 'vidro',
// };
//const caneca = Object.assign({}, produto, { material: 'porcelana' });
const caneca = { nome: produto.nome, preco: produto.preco };
produto.nome = 'caneta';
// outraCoisa.preco = 2.5;
// console.log(outraCoisa);
console.logo(Object.keys(produto));
Object.defineProperties(produto, 'nome', {
	writable: false,
	configurable: false,
	value: 'qualquer outra coisa.',
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
produto.nome = 'outra coisa';
delete produto.nome;
console.log(Object.entries(produto));

for (let [chave, valor] of Object.entries(produto)) {
	console.log(chave, valor);
}
