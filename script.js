function addTodo() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();

    if(todoText === '') return;

    const todoList = document.getElementById('todoList');

    const li = document.createElement('li');
    li.textContent = todoText;

    todoList.appendChild(li);

    input.value="";
}