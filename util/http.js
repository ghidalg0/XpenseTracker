import axios from "axios";

export const storeExpense = (expenseData) => {
  axios.post(
    'https://xpensetracker-94ce7-default-rtdb.europe-west1.firebasedatabase.app/expenses.json',
    expenseData,
  );
};
