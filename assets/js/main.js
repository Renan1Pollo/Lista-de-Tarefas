const inputTarefa = document.querySelector('.input-tarefa');
const lista = document.querySelector('.tarefas');

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value)
            return;
        criarTarefa(inputTarefa.value);
    }
}); // capturando a tecla que foi pressionada

function limparInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criarTarefa(textinput) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = textinput;

    const div = document.createElement('div');

    const btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btn-acao');
    btnExcluir.innerHTML = `<span class="trash">🗑</span>`;

    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);

    lista.appendChild(li);
    limparInput();
}

function addTarefa() {
    if (!inputTarefa.value)
        return;
    criarTarefa(inputTarefa.value);
}

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('trash')) {
        let confirm = window.confirm('Tem certeza que deseja excluir ?');
        if (confirm == true) {
            let btnApagar = document.querySelector('.tarefas div');
            btnApagar.parentElement.remove();
        }
    }
});