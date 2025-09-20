"use strict";
let todos = []; // Array that can only contain strings (tasks)
// Add 3 tasks
todos.push("Wash the dishes");
todos.push("Walk the dog");
todos.push("Water the plants");
// Log output
console.log("[ To-do-List ]");
for (let task of todos) {
    console.log(`* ${task}`);
}
