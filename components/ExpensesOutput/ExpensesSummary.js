import { Text, View } from "react-native";

export const ExpensesSummary = ({ expenses, periodName }) => {

  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount
  }, 0); // reduce = standard method JS allowing to combine multiple values into a single number, i.e. a sum

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>{expensesSum.toFixed(2)}</Text>
    </View>
  );
}
