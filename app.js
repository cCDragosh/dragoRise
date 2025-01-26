document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', function() {
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            todoInput.value = '';
        }
    });

    todoList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Cargar tareas desde el localStorage
    loadTasks();

    addBtn.addEventListener('click', function() {
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            saveTask(taskText);
            todoInput.value = '';
        }
    });

    todoList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            const taskItem = e.target.parentElement;
            removeTask(taskItem.textContent.replace('Delete', '').trim());
            taskItem.remove();
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }

    function saveTask(taskText) {
        let tasks = localStorage.getItem('tasks');
        if (tasks === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(tasks);
        }
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        let tasks = localStorage.getItem('tasks');
        if (tasks !== null) {
            tasks = JSON.parse(tasks);
            tasks.forEach(task => addTask(task));
        }
    }

    function removeTask(taskText) {
        let tasks = localStorage.getItem('tasks');
        if (tasks !== null) {
            tasks = JSON.parse(tasks);
            tasks = tasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }
});
