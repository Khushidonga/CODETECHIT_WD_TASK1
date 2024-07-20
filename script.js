document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', addTodo);

    function addTodo(event) {
        event.preventDefault();
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(li);
            });

            li.appendChild(completeButton);
            li.appendChild(deleteButton);
            todoList.appendChild(li);

            todoInput.value = '';
        }
    }
});
