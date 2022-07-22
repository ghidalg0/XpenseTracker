import { useContext } from "react";


// Components
import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

export const AllExpenses = () => {
  const expensesContext = useContext(ExpensesContext);
  return <ExpensesOutput expenses={expensesContext.expenses} expensesPeriod="Total" />;
}
