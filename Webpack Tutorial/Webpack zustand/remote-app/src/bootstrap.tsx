// bootstrap.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import Todo from "./Todo";
import ExpenseForm from "./ExpenseForm";
import ExpensesChart from "./ExpensesChart";

const container = document.getElementById("root");
if (!container) throw new Error("Root element not found");
createRoot(container).render(<ExpensesChart />);