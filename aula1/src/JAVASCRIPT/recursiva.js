///a função se chama de volta, tem um limite (maximum call stack size exceeded)

function recursiva(max) {
	console.log(max);
	if (max >= 10) return;
	max++;
	recursiva(max);
}

recursiva(0);
