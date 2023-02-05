//escopo lexico

const nome = 'baron';

function falaNome() {
	console.log(nome);
}

function usaFala() {
	const nome = 'jessica';
	falaNome();
}

usaFala();
