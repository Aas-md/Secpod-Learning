import { Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useExpenseStore } from "./expenseStore";
import { Expense } from "./interfaces";



export default function Chart() {

    let makeCategory = (expenses: Expense[]) => {

        
        let data : Record<string, Expense> = {}

        for (const expense of expenses) {
            if (data[expense.category])
                data[expense.category].amount += expense.amount
            else
                data[expense.category] = { ...expense }
        }
        return Object.values(data)
    }
    const expenses = useExpenseStore((state) => state.expenses)
    let data = makeCategory(expenses)

    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    dataKey="amount"
                    nameKey="category"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
}

