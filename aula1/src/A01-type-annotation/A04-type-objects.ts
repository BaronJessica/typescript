const objetoA: { chaveA: string; chaveB: string; [key: string]: unknown } = {
	chaveA: 'Valor A',
	chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro Valor';
objetoA.chaveC = 'nova chave';
objetoA.chaveD = 'nova jessica';
console.log(objetoA.chaveA);
