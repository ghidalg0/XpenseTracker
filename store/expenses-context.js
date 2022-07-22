import { createContext, useReducer } from "react";

const MOCK_EXPENSES = [
  {
    id: "e1",
    description: "salad",
    amount: 4.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e2",
    description: "quinoa",
    amount: 10.82,
    date: new Date("2022-02-12"),
  },
  {
    id: "e3",
    description: "banana",
    amount: 3.67,
    date: new Date("2022-03-19"),
  },
  {
    id: "e4",
    description: "skyr",
    amount: 6.78,
    date: new Date("2022-03-22"),
  },
  {
    id: "e5",
    description: "raspberries",
    amount: 5.45,
    date: new Date("2022-03-23"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{...action.payload, id: id}, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex((exp) => exp.id === action.payload.id);
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((exp) => exp.id !== action.payload)
    default:
      return state;
  }
};

export const ExpensesContextProvider = ({ children }) => {

  const [expensesState, dispatch] = useReducer(expensesReducer, MOCK_EXPENSES); // = useState but for more complex scenarios

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id, expenseData) => {
    dispatch({ type: "DELETE", payload: {id: id, data: expenseData} });
  };

  const updateExpense = (id) => {
    dispatch({ type: "UPDATE", payload: id });
  };

  return (
    <ExpensesContext.Provider>
      {children}
    </ExpensesContext.Provider>
  );
};
