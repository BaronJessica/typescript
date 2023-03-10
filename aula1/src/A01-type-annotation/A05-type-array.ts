// Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
	return args.reduce((ac, valor) => ac * valor, 1);
}
export function concatenaStrings(...args: string[]): string {
	return args.reduce((ac, valor) => ac + valor);
}
export function toUppercase(...args: string[]): string[] {
	return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaStrings('1', '2', '3');
const upper = toUppercase('tudo', 'oi');
console.log(result);
console.log(upper);
console.log(concatenacao);
