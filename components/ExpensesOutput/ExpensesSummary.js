import { Text, View, StyleSheet } from "react-native";

// Sytling
import { GlobalStyles } from "../../constants/styles";

export const ExpensesSummary = ({ expenses, periodName }) => {

  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount
  }, 0); // reduce = standard method JS allowing to combine multiple values into a single number, i.e. a sum

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>$ {expensesSum.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  }
});
