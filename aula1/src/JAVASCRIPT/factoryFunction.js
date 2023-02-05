//factory function this=quem chamar o objeto
//constructor function
function criaPessoa(nome, sobrenome, altura, peso) {
	return {
		nome,
		sobrenome,
		get nomeCompleto() {
			return `${this.nome} ${this.sobrenome}`;
		},
		//setter
		set nomeCompleto(valor) {
			valor = valor.split(' ');
			this.nome = valor.shift();
			this.sobrenome = valor.join(' ');
		},
		fala: function (assunto) {
			return `${this.nome} está ${assunto}`;
		},
		altura: altura,
		peso: peso,
		//getter
		get imc() {
			const indice = this.peso / this.altura ** 2;
			return indice.toFixed(2);
		},
	};
}

const p1 = criaPessoa('jessica', 'rafaeli', 1.8, 100);
console.log(p1.fala('falando sobre js'));
console.log(p1.imc);
p1.nomeCompleto = 'Jessica Rafaeli Baron';
console.log(p1.sobrenome);
