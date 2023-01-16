const inputTarefa = document.querySelector('.input-tarefa');
const lista = document.querySelector('.tarefas');

function criarTarefa(textinput) {
    const li = document.createElement('li');
    
    li.innerHTML = textinput;
    lista.appendChild(li);
}

function addTarefa() {
    if (!inputTarefa.value)
    return;
    criarTarefa(inputTarefa.value);
}