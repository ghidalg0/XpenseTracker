
// Components
import { useContext, useEffect, useState } from "react";
import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOutput";
import { LoadingOverlay } from "../components/UI/LoadingOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

export const RecentExpenses = () => {
  const expensesContext = useContext(ExpensesContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getExpenses = async () => {
      setIsLoading(true);
      const expenses = await fetchExpenses();
      setIsLoading(false);
      expensesContext.setExpenses(expenses);
    };

    getExpenses();
  }, []);

  const recentExpenses = expensesContext.expenses.filter((expense) => {
      const today = new Date();
      const date7DaysAgo = getDateMinusDays(today, 7);
      return (expense.date > date7DaysAgo) && (expense.date <= today);
    }
  );

  if (isLoading) {
    return <LoadingOverlay />
  }

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
};
