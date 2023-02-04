const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
	const li = document.createElement('li');
	return li;
}

inputTarefa.addEventListener('keypress', function (e) {
	if (e.keyCode === 13) {
		if (!inputTarefa.value) return;
		criaTarefa(inputTarefa.value);
	}
});

function limpaInput() {
	inputTarefa.value = '';
	inputTarefa.focus();
}

function criaBtnApagar(li) {
	li.innerText += ' ';
	const btnApagar = document.createElement('button');
	btnApagar.innerText = 'Apagar';
	btnApagar.setAttribute('class', 'Apagar');
	btnApagar.setAttribute('title', 'Apagar esta tarefa');
	li.appendChild(btnApagar);
}

function criaTarefa(textoInput) {
	const li = criaLi();
	li.innerText = textoInput;
	tarefas.appendChild(li);
	limpaInput();
	criaBtnApagar(li);
	salvarTarefa();
}

btnTarefa.addEventListener('click', function () {
	if (!inputTarefa.value) return;
	criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) {
	const el = e.target;

	if (el.classList.contains('Apagar')) {
		el.parentElement.remove();
		salvarTarefa();
	}
});

function salvarTarefa() {
	const liTarefas = tarefas.querySelectorAll('li');
	const listaTarefas = [];

	for (let tarefa of liTarefas) {
		let tarefaText = tarefa.innerText;
		tarefaText = tarefaText.replace('Apagar', '').trim();
		listaTarefas.push(tarefaText);
	}
	const tarefasJSON = JSON.stringify(listaTarefas);
	localStorage.setItem('tarefas', tarefasJSON);
}

function addTarefasSalvas() {
	const tarefas = localStorage.getItem('tarefas');
	const listaTarefas = JSON.parse(tarefas);
	for (let tarefa of listaTarefas) {
		criaTarefa(tarefa);
	}
}
addTarefasSalvas();
