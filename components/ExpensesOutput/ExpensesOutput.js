import { View } from "react-native";

// Components
import { ExpensesList } from "./ExpensesList";
import { ExpensesSummary } from "./ExpensesSummary";

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

export const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary expenses={MOCK_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}
