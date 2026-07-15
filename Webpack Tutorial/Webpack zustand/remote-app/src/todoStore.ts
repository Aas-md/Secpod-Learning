import { create } from "zustand";
import { Task, TodoStore } from "./interfaces";

export const useTodoStore = create<TodoStore>((set) => (
    {
        todos: [],
        addTask: (task: Task) => set((state) => ({
            todos: [...state.todos, task]
        })),
        completeTask: (task: Task) => set((state) => ({
            todos: state.todos.map((todo) => {
                if (todo == task)
                    return { ...task, isCompleted: true }
                return todo
            })
        })),
        deleteTask: (task: Task) => set((state) => ({
            todos: state.todos.filter((todo) => todo != task)
        }))
    }
))