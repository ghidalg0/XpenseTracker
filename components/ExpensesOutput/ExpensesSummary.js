import { Text, View } from "react-native";

export const ExpensesSummary = ({ expenses, periodName }) => {

  const expensesSum = expenses.reduce((sum, expense) => { // reduce = standard method JS allowing to combine multiple values into a single number, i.e. a sum
    return sum + expense.amount
  }, 0);

  return (
    <View>
        <Text>{periodName}</Text>
        <Text>{expensesSum.toFixed(2)}</Text> {/* method to ensure we have only 2 decimals */}
      </View>
  );
};
