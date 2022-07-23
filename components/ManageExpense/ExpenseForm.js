import { StyleSheet, View, Text } from "react-native";
import { Input } from "./Input";

export const ExpenseForm = () => {

  const amountChangedHandler = () => {};

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input label="Amout" style={styles.rowInput} textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChangedHandler,
        }} />
        <Input label="Date" style={styles.rowInput} textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: null,
        }} />
      </View>
      <Input label="Description" textInputConfig={{
        multiline: true,
        //autoCorrect: false, // set to true by default
        autoCapitalize: "sentences",
       }} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 24,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
