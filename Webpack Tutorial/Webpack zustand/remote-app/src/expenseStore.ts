import { create, useStore } from "zustand";
import { Expense, ExpenseStore } from "./interfaces";

function initialLoading(): Expense[] {

    let expenses = JSON.parse(localStorage.getItem('myExpenses'))
    return expenses || []
}

export const useExpenseStore = create<ExpenseStore>((set) => ({

    expenses: initialLoading(),
    addExpenses: (expense: Expense) => {
        set((state) => {
            let updatedExpenses = [...state.expenses, expense]
            localStorage.setItem('myExpenses', JSON.stringify(updatedExpenses))
            return { expenses: updatedExpenses }
        })
    },
    editExpenses: (expense: Expense) => {

    },
    deleteExpenses: (expense: Expense) => {
        set((state) => {
            let updatedExpenses = state.expenses.filter((curr) => curr !== expense)
            localStorage.setItem('myExpenses', JSON.stringify(updatedExpenses))
            return { expenses: updatedExpenses }
        })
    }
}))

// let expenses: Expense[] = JSON.parse(localStorage.getItem('myExpenses')) || []
// expenses.push(expense)
// localStorage.setItem('myExpenses', JSON.stringify(expenses))