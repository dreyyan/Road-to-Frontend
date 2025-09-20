interface TodoItem {
    readonly id: number;
    text: string;
    completed: boolean;
};

// Create a todo list
let toDoList: TodoItem = {
    id: 100,
    text: "Wash the dishes",
    completed: false
}

// FUNCTION: Toggle item state to 'completed'
const toggleItem = (toDoList: TodoItem): TodoItem => {
    toDoList.completed = !toDoList.completed; // toggle 'completed'

    if (toDoList.completed == true)
        console.log("Item set to 'finished'");
    else
        console.log("Item set to 'unfinished'");
        
    return {
        ...toDoList
    };
};

// Test function
toggleItem(toDoList);
toggleItem(toDoList);