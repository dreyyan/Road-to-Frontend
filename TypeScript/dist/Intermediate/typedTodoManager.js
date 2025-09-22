"use strict";
const manageTodos = (todos, action) => {
    if (action == "add") {
        todos.push({ id: 1, text: "N/A", completed: false }); // Add todo item in the list of todos
    }
    else { // Action: "toggle"
        for (let todo of todos) {
            todo.completed = !todo.completed; // Toggle completion state
        }
    }
    return todos;
};
let todos1 = [
    { id: 1, text: "A", completed: false },
    { id: 2, text: "B", completed: true },
    { id: 3, text: "C", completed: false },
];
console.log(todos1);
console.log(manageTodos(todos1, "add"));
console.log(manageTodos(todos1, "toggle"));
console.log(manageTodos(todos1, "toggle"));
