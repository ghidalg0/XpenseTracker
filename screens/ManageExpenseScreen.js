import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

// Component
import { Button } from "../components/UI/Button";
import { IconButton } from "../components/UI/IconButton";

// Styling
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";

export const ManageExpense = ({ route, navigation }) => {

  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId; // converts value into a boolean

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing? "Edit Expense" : "Add Expense"
    })
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {description: "test update", amount: 9.99, date: new Date("2022-07-22")});
    } else {
      expensesCtx.addExpense({description: "test", amount: 9.99, date: new Date("2022-07-22")});
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      <View style={styles.buttons}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>Cancel</Button>
        <Button onPress={confirmHandler} style={styles.button}>{isEditing ? "Update" : "Add"}</Button>
      </View>
      {isEditing &&
        <View style={styles.deleteContainer}>
            <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler} />
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  }
});
