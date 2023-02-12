//arrow function

// const arrowSum = (a, b) => a + b;

// console.log(arrowSum(5, 5));

// const greeting = (name) => {
// 	if (name) {
// 		return 'Olá' + name + '!';
// 	} else {
// 		return 'Olá!';
// 	}
// };

// console.log(greeting('Jessica'));
// console.log(greeting());

// const user = {
// 	name: 'Jessica',
// 	sayUserName() {
// 		setTimeout(function () {
// 			console.log(this);
// 			console.log('Username: ' + this.name);
// 		}, 500);
// 	},
// 	sayUserNameArrow() {
// 		setTimeout(() => {
// 			console.log(this);
// 			console.log('Username: ' + this.name);
// 		}, 700);
// 	},
// };

// user.sayUserName();
// user.sayUserNameArrow();

//filter
// const arr = [1, 2, 3, 4, 5];
// const highNumbers = arr.filter((n) => {
// 	if (n >= 3) {
// 		return n;
// 	}
// });

// console.log(highNumbers);

// const users = [
// 	{ name: 'jessica', available: true },
// 	{ name: 'vitor', available: true },
// 	{ name: 'marlene', available: false },
// 	{ name: 'jamir', available: false },
// ];

// const availbleUsers = users.filter((user) => user.available);
// console.log(availbleUsers);
// const notAvailbleUsers = users.filter((user) => !user.available);
// console.log(notAvailbleUsers);

//MAP filtro + modificação dos elementos

// const products = [
// 	{ name: 'camisa', price: 10.99, category: 'roupas' },
// 	{ name: 'toalha', price: 15.99, category: 'cama e banho' },
// 	{ name: 'fritadeira', price: 71.99, category: 'eletrodomesticos' },
// 	{ name: 'calça', price: 13.99, category: 'roupas' },
// ];

// products.map((product) => {
// 	if (product.category === 'roupas') {
// 		product.onSale = true;
// 	}
// });

// console.log(products);

// template literals

// const userName = 'Jessica';
// const age = 30;

// console.log(`O nome do usuário é ${userName} e ela tem ${age} anos de idades`);

// Destructuring
// const fruits = ['Maçã', 'Laranja', 'Uva'];

// const [g1, g2, g3] = fruits;
// console.log(g3);

// const products = {
// 	name: 'calça',
// 	price: 13.99,
// 	category: 'roupas',
// 	color: 'Azul',
// };
// const { name: productName, price, category: productCategory, color } = products;

// console.log(
// 	`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e é ${color}`,
// );

//spread operator

// const a1 = [1, 2, 3, 4, 5];
// const a2 = [6, 7, 8, 9];

// const a3 = [...a1, ...a2];
// console.log(a3);

// const a4 = [0, ...a3];
// console.log(a4);

// const carName = { name: 'Gol' };
// const carBrand = { brand: 'VW' };

// const car = { ...carName, ...carBrand };
// console.log(car);

//CLASSES

class Products {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	productWithDiscount(discount) {
		return this.price * ((100 - discount) / 100);
	}
}
// const shirt = new Products('camisa gola v', 20);

// console.log(shirt.name);

// console.log(shirt.productWithDiscount(50));

// const tenis = new Products('tenis preto', 120);
// console.log(tenis.productWithDiscount(30));

//HERAÇA

class ProductWithAttributes extends Products {
	constructor(name, price, colors) {
		super(name, price);
		this.colors = colors;
	}
	showColors() {
		console.log('As cores são: ');
		this.colors.forEach((color) => {
			console.log(color);
		});
	}
}

const hat = new ProductWithAttributes('Chapeu', 29.99, [
	'preto',
	'azul',
	'verde',
]);

console.log(hat.name);
console.log(hat.productWithDiscount(20));
hat.showColors();
