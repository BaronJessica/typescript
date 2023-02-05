// ES6 arrow function

const arrow = () => {
	console.log('sou uma arrow function');
};

arrow();

// funcao anonima = função sem nome
const a = 2;
const b = 3;
setInterval(function () {
	console.log(a + b);
}, 1000);

// dentro de um objeto

const obj = {
	falar() {
		console.log('estou falando...');
	},
};

obj.falar();
