const dadosCliente1: [number, string] = [1, 'oi'];
const dadosCliente2: [number, string, ...string[]] = [
	1,
	'oi',
	'tudo',
	'number',
];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'tudo bem?';
console.log(dadosCliente1);
console.log(dadosCliente2);

const array2: readonly string[] = ['oi', 'claro', 'escuro'];
console.log(array2);
