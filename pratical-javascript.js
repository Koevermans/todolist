var todoList = {
    todos: [],
    displayTodos: function() {
        if(this.todos.length < 1) {
            console.log("Your todo list is empty");
        } else {
            console.log('My todos:');
            for(let i = 0; i < this.todos.length; i++) {
                if(this.todos[i].completed) {
                    console.log(this.todos[i].todoText, '(x)');
                } else {
                    console.log(this.todos[i].todoText , '( )');
                }
            }
        }
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos;
    },
    toggleCompleted: function(position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function() {
        let totalTodos = this.todos.length;
        let completedTodos = 0;

        for(let i = 0; i < totalTodos; i++) {
            if(this.todos[i].completed) {
                completedTodos++;
            }
        }
        
        if(completedTodos === totalTodos) {
            for(let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for(let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true; 
            }
        } 
        this.displayTodos();
    }
};

// Access DOM en Event listener
let displayTodosButton = document.getElementById('displayTodosButton');
let toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function() {
    todoList.displayTodos()
});
toggleAllButton.addEventListener('click', function() {
    todoList.toggleAll()
});
