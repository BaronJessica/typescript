// closures: habilidade da funcao acessar o seu escopo lexico
function retornaFuncao(nome) {
	return function () {
		return nome;
	};
}

const funcao = retornaFuncao('jessica');
console.log(funcao());
