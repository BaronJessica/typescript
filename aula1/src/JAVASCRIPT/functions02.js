//argumentos que sustenta todos os argumentos enviados

function funcao() {
	let total = 0;
	for (let argumento of arguments) {
		total += argumento;
	}

	console.log(total);
}

funcao(1, 2, 100, 500, 332);

//desestruturação
function destruction([v1, v2, v3]) {
	console.log(v1, v2, v3);
}
destruction(['jessica', 'baron', 30]);

//rest operator
function conta(operador, acumulador, ...numeros) {
	for (let numero of numeros) {
		if (operador === '+') acumulador += numero;
		if (operador === '-') acumulador -= numero;
		if (operador === '/') acumulador /= numero;
		if (operador === '*') acumulador *= numero;
	}
	console.log(acumulador);
}
conta('+', 1, 20, 30, 40, 50);

const conta2 = (...args) => {
	console.log(args);
};
