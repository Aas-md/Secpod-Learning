import React, { useState } from "react";
import { useTodoStore } from "./todoStore";

export default function Todo() {

    const todos = useTodoStore((state) => state.todos)
    const addTask = useTodoStore((state) => state.addTask)
    const completeTask = useTodoStore((state) => state.completeTask)
    const deleteTask = useTodoStore((state) => state.deleteTask)

    const [formData, setFormData] = useState<string>("")

    let handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formData == '')
            return
        addTask({ task: formData, isCompleted: false })
        setFormData('')
    }

    let handleOnComplete = (idx: number) => {
        let currTodo = todos[idx]
        completeTask(currTodo)
    }

    let hanldeOnDelete = (idx: number) => {
        let currTodo = todos[idx]
        deleteTask(currTodo)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task</label>
                <input type="text" id="task" value={formData} onChange={(e) => setFormData(e.target.value)} />
                <button>Submit</button>
            </form>

            <div>
                <ul>
                    {todos.map((todo, idx) => (
                        <li key={idx}>
                            <span style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>{todo.task}</span>
                            &nbsp;
                            &nbsp;
                            <button onClick={() => handleOnComplete(idx)}>Done</button>
                            <button onClick={() => hanldeOnDelete(idx)}>Delete</button>

                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}