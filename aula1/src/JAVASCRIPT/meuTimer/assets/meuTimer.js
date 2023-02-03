//new Date();
function clock() {
	function getTimeFromSec(seconds) {
		const data = new Date(seconds * 1000);
		return data.toLocaleTimeString('pt-BR', {
			hour12: false,
			timeZone: 'UTC',
		});
	}
	const relogio = document.querySelector('.relogio');
	let seconds = 0;
	let timer;

	document.addEventListener('click', function (e) {
		const el = e.target;
		if (el.classList.contains('zerar')) {
			clearInterval(timer);
			seconds = 0;
			relogio.classList.remove('pausado');
			relogio.innerHTML = '00:00:00';
		}
		if (el.classList.contains('iniciar')) {
			clearInterval(timer);
			timerStart();
			relogio.classList.remove('pausado');
		}
		if (el.classList.contains('pausar')) {
			clearInterval(timer);
			relogio.classList.add('pausado');
		}
	});

	function timerStart() {
		timer = setInterval(function () {
			seconds++;
			relogio.innerHTML = getTimeFromSec(seconds);
		}, 1000);
	}
}
clock();
