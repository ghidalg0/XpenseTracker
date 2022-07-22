import { useLayoutEffect } from "react";
import { Text } from "react-native";

export const ManageExpense = ({ route, navigation }) => {

  const editexExpenseId = route.params?.expenseId;
  const isEditing = !!editexExpenseId; // converts value into a boolean

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing? "Edit Expense" : "Add Expense"
    })
  }, [navigation, isEditing]);


  return (
    <Text>ManageExpense</Text>
  );
};
