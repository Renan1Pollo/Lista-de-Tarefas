const inputTarefa = document.querySelector('.input-tarefa');
const lista = document.querySelector('.tarefas');

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13){
        if (!inputTarefa.value)
        return;
        criarTarefa(inputTarefa.value);
    }
}); // capturando a tecla que foi pressionada

function limparInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criarBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'apagar';
    li.appendChild(botaoApagar);
}

function criarTarefa(textinput) {
    const li = document.createElement('li');

    li.innerHTML = textinput;
    lista.appendChild(li);
    limparInput();
}

function addTarefa() {
    if (!inputTarefa.value)
        return;
    criarTarefa(inputTarefa.value);
    criarBotaoApagar(li);
}