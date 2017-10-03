/**
 * Created by Razso_000 on 9/13/2017.
 */
var toDoList = {
    toDo: [],
    addToDo: function (todoText) {
        this.toDo.push({
            todoText: todoText,
            completed: false
        });
    },
    deleteToDo: function (y) {
        this.toDo.splice(y, 1);
    },
    toggleCompleted: function (position) {
        var toDo = this.toDo[position];
        toDo.completed = !toDo.completed;
    },
    toggleAll: function () {
        var totalTodos = this.toDo.length;
        var completedTodos = 0;
        this.toDo.forEach(function (todo) {
            if (todo.completed === true) {
                completedTodos++;
            }
        });
        this.toDo.forEach(function (todo) {
            todo.completed = completedTodos !== totalTodos;
        });
    }
};

var handlers = {
    addTodo: function () {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        toDoList.addToDo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function (position) {
        toDoList.deleteToDo(position);
        view.displayTodos();
    },
    toggleCompleted: function (position) {
        toDoList.toggleCompleted(position);
        view.displayTodos();
    },
    toggleAll: function () {
        toDoList.toggleAll();
        view.displayTodos();
    }
};
var view = {
    displayTodos: function () {
        var todoUl = document.getElementById('list');
        todoUl.innerHTML = '';
        toDoList.toDo.forEach(function (todo, position) {
            var todoLi = document.createElement('li');
            var todoTextWithCompletion = '';

            if (todo.completed === true) {
                todoTextWithCompletion = '✔ ' + todo.todoText;
            } else {
                todoTextWithCompletion = '✖ ' + todo.todoText;
            }
            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createToggleButton());
            todoLi.appendChild(this.createDeleteButton());
            todoUl.appendChild(todoLi);
        }, this)
    },
    createDeleteButton: function () {
        var deleteButton = document.createElement('a');
        deleteButton.className = 'waves-effect waves-teal btn-flat';
        deleteButton.textContent = 'Delete';
        deleteButton.id = 'deleteButton';
        return deleteButton;
    },
    createToggleButton: function () {
        var toggleButton = document.createElement('a');
        toggleButton.className = 'waves-effect waves-teal btn-flat';
        toggleButton.textContent = 'Toggle';
        toggleButton.id = 'toggleButton';

        return toggleButton;
    },
    setUpEventListeners: function () {
        var todoUl = document.querySelector('ol');
        todoUl.addEventListener('click', function (event) {
            var elementClicked = event.target;
            if (elementClicked.id === 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
        todoUl.addEventListener('click', function (event) {
            var elementClicked = event.target;
            if (elementClicked.id === 'toggleButton') {
                handlers.toggleCompleted(parseInt(elementClicked.parentNode.id));
            }
        });
        todoUl.addEventListener('click', function (event) {
            var elementClicked = event.target;
            if (elementClicked.id === 'todoButton') {
                var position = parseInt(elementClicked.parentNode.id);
                var newText = document.getElementById('changeTodoText');
                handlers.changeTodo(position, newText);
            }
        });
    }
};

view.setUpEventListeners();

