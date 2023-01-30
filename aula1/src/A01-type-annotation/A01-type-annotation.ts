/*eslint-disable*/

let nome: string = 'luiz';


//arrays
let arrayDeNumeros: Array<number> = [1,23,23,11,13];
let arrayDeNumeros2: number[] = [1,23,23,11,13];
let arrayDeStrings: Array<string> = ['1,23,23,11,13', 'eee'];
let arrayDeStrings2: string[] = ['1,23,23,11,13', 'eee'];

//objetos adulto?: significa opcional
let pessoa: {nome: string, idade: number, adulto?: boolean}={
	nome: 'Jessica',
	idade: 30
};
console.log(pessoa.nome);

//Funções
function soma(x:number, y:number){
	return x+y;
}
const result = soma(2,2);
const soma2:(x:number, y:number) => number = (x,y) => (x+y);
