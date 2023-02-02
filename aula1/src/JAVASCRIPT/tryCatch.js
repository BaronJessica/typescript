// try {
// 	console.log(oi);
// } catch (e) {
// 	console.log('Cai no catch');
// }

// function soma(x, y) {
// 	if (typeof x !== 'number' || typeof y !== 'number') {
// 		throw new Error('x e y precisam ser numeros.');
// 	}
// 	return x + y;
// }
// try {
// 	console.log(soma(1, 2));
// 	console.log(soma('1', 2));
// } catch (e) {
// 	console.log(e);
// }

// try {
// 	console.log('Abrir um arquivo');
// 	console.log('Manipulei o arquivo e gerou um erro');
// 	console.log('Fechei arquivo');
// } catch (e) {
// 	console.log('tratando erro');
// } finally {
// 	console.log('Finally Eu sempre sou executado');
// }

function retornaHora(data) {
	if (data && !(data instanceof Date)) {
		throw new TypeError('esperando instancia de date');
	}
	if (!data) {
		data = new Date();
	}
	return data.toLocaleTimeString('pt-BR', {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false,
	});
}
try {
	const data = new Date('01-01-1993 14:45:13');
	const hora = retornaHora();
	console.log(hora);
} catch (e) {
} finally {
	console.log('tenha um bom dia');
}
