import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

// Component
import { IconButton } from "../components/UI/IconButton";

// Styling
import { GlobalStyles } from "../constants/styles";

export const ManageExpense = ({ route, navigation }) => {

  const editexExpenseId = route.params?.expenseId;
  const isEditing = !!editexExpenseId; // converts value into a boolean

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing? "Edit Expense" : "Add Expense"
    })
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {};

  return (
    <View style={styles.container}>
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
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  }
});
