function semRetorno(...args: string[]): void {
	console.log(args.join(' '));
}
const pessoa = {
	nome: 'Jessica',
	sobrenome: 'Baron',

	exibirNome(): void {
		console.log(this.nome + ' ' + this.sobrenome);
	},
};

semRetorno('Jessica', 'Baron');
pessoa.exibirNome();

export { pessoa };
