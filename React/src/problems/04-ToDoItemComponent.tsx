import { useState } from "react";

export interface TodoProps {
    id: number;
    text: string;
    completed: boolean;
};

const TodoItem: React.FC<{ todo: TodoProps; onToggle: (id: number) => void }> = ({ todo, onToggle }) => {
    return (
        <div
        onClick={() => onToggle(todo.id)}
        className={`cursor-pointer
            ${todo.completed ? "bg-blue-500 px-4" : "bg-gray-200"}`}
        >
            {todo.text}
        </div>
    );
};

export default TodoItem;