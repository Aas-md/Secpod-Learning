import { useState } from "react"

export default function Todo() {

    let [tasks, setTasks] = useState([])
    let [input, setInput] = useState('')

    let addTask = () => {
        setTasks([...tasks, { task: input, isCompleted: false }])
        setInput('')

    }

    let hanldeInput = (event) => {
        setInput(event.target.value)
    }

    let handleCompleted = (idx) => {

        setTasks(tasks.map((task, i) =>
            i == idx ? { ...task, isCompleted: true } : task
        ))
    }

    let deleteTask = (idx) => {

    setTasks(tasks.filter((task,i)=>
        idx !== i && task
    ))        

    }

    return (
        <>
            <h1>Todo Component</h1>
            <input type="text" placeholder="Type your task" onChange={hanldeInput} value={input} />
            &nbsp;  &nbsp;
            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((task, idx) => (
                    <li key={idx}>
                        <span style={{ textDecoration: task.isCompleted && 'line-through' }}>{task.task}</span>
                        &nbsp;&nbsp;
                        <button onClick={() => handleCompleted(idx)}>done</button>
                        &nbsp;&nbsp;
                        <button onClick={() => deleteTask(idx)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}