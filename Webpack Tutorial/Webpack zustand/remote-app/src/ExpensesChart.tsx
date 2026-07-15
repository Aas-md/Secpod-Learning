import Chart from "./Chart";
import ExpenseForm from "./ExpenseForm";
import { useExpenseStore } from "./expenseStore";

export default function ExpensesChart() {
    let expenses = useExpenseStore((state) => state.expenses)
    let deleteExpense = useExpenseStore((state) => state.deleteExpenses)

    return (
        <>
            <ExpenseForm />
            <div>


                {expenses?.map((expense, idx) => (
                    <div key={idx} style={{ marginTop: "20px" }}>
                        <span style={{ marginRight: "20px" }}>{expense.category}</span>

                        <span style={{ marginRight: "20px" }}>{expense.amount}</span>
                        <button onClick={() => deleteExpense(expense)}>Delete</button>

                    </div>
                ))}
            </div>

            <Chart />
        </>
    )
}
