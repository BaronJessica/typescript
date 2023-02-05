// return, retorna um valor, termin a função

function soma(a, b) {
	return a + b;
}

document.addEventListener('click', function () {
	document.body.style.backgroudColor = 'pink';
});

function criaPessoa(nome, sobre) {
	return {
		nome: nome,
		sobre: sobre,
	};
}
const p1 = criaPessoa('jessica', 'baron');

function phrase(comeco) {
	function rest(resto) {
		return comeco + ' ' + resto;
	}
	return rest;
}

const hello = phrase('hello');
console.log(hello('world'));

//
function criaMulti(multi) {
	//multiplicador
	return function (n) {
		return n * multi;
	};
}

const duplica = criaMulti(2);
const tri = criaMulti(3);
const quadriplica = criaMulti(4);

console.log(duplica(10));
console.log(tri(227));
console.log(quadriplica(35));
