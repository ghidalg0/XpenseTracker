import { View } from "react-native";

// Components
import { ExpensesList } from "./ExpensesList";
import { ExpensesSummary } from "./ExpensesSummary";

export const ExpensesOutput = ({ expenses }) => {
  return (
    <View>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
}
