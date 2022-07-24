
// Components
import { useContext, useEffect, useState } from "react";
import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOutput";
import { ErrorOverlay } from "../components/UI/ErrorOverlay";
import { LoadingOverlay } from "../components/UI/LoadingOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

export const RecentExpenses = () => {
  const expensesContext = useContext(ExpensesContext);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getExpenses = async () => {
      setIsLoading(true);
      try {
        const expenses = await fetchExpenses();
        expensesContext.setExpenses(expenses);
      } catch (error) {
        setError('Could not find expenses...')
      }
      setIsLoading(false);
    };

    getExpenses();
  }, []);

  const recentExpenses = expensesContext.expenses.filter((expense) => {
      const today = new Date();
      const date7DaysAgo = getDateMinusDays(today, 7);
      return (expense.date > date7DaysAgo) && (expense.date <= today);
    }
  );

  const errorHandler = () => setError(null);

  if (isLoading) {
    return <LoadingOverlay />
  };

  if (error && !isLoading) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />
  };

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
};
