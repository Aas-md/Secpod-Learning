import { useForm } from "react-hook-form"
import { Expense } from "./interfaces"
import { useExpenseStore } from "./expenseStore"

export default function ExpenseForm() {
    let { register, handleSubmit, formState: { errors }, reset } = useForm<Expense>()
    let addExpense = useExpenseStore((state) => state.addExpenses)

    let submitData = (data: Expense) => {
        addExpense(data)
        reset()
    }
    return (

        <form onSubmit={handleSubmit((data) => submitData(data))}>
            <label htmlFor="amount">Amount</label>
            <input type="number" {...register("amount", { required: true, valueAsNumber: true })} />

            <label htmlFor="category">Category</label>
            <select id="category" {...register("category", { required: true })} required defaultValue="">
                <option value="" disabled >Please choose an option </option>
                <option value="food">Food</option>
                <option value="trevel">Trevel</option>
                <option value="education">Education</option>
            </select>
            &nbsp;
            <button>Submit</button>

            {errors.amount && <p style={{ color: "red" }}>Amount is required.</p>}
            {errors.category && <p style={{ color: "red" }}>Category is required.</p>}

        </form>
    )
}