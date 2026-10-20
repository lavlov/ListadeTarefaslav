// 1. Pegando os elementos do HTML
const inputTarefa = document.getElementById('add-tarefa');
const btnAdd = document.getElementById('btn-add');
const listaTarefas = document.getElementById('tarefas');

// 2. Função que cria e adiciona uma tarefa
function adicionarTarefa() {
    const texto = inputTarefa.value.trim();

    if (texto === '') {
        return;
    }

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = texto;

    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'X';

    // Marcar/desmarcar como concluída
    li.addEventListener('click', function () {
        li.classList.toggle('concluida');
    });

    // Remover sem acionar o clique do li
    btnRemover.addEventListener('click', function (event) {
        event.stopPropagation();
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(btnRemover);
    listaTarefas.appendChild(li);

    inputTarefa.value = '';
    inputTarefa.focus();
}

// 3. Eventos
btnAdd.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});