export interface Task {
    task: string
    isCompleted: boolean
}

export interface TodoStore {
    todos: Task[],
    addTask: (task: Task) => void
    completeTask: (task: Task) => void
    deleteTask: (task: Task) => void
}

export interface Expense {
    amount: number
    category: 'food' | 'trevel' | 'education'
}

export interface ExpenseStore {

    expenses: Expense[]
    addExpenses: (expense: Expense) => void
    editExpenses: (expense: Expense) => void
    deleteExpenses: (expense: Expense) => void

}
