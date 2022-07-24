import axios from "axios";

const BACKEND_URL = 'https://xpensetracker-94ce7-default-rtdb.europe-west1.firebasedatabase.app/';

export const storeExpense = async (expenseData) => {
  const response = await axios.post(
    BACKEND_URL + 'expenses.json',
    expenseData,
  );
  const id = response.data.name; // firebase "name" = id
};


export const fetchExpenses = async () => {
  const response = await axios.get(
    BACKEND_URL + 'expenses.json'
  );
  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  };
  return expenses;
};
