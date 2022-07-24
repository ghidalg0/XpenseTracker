import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input } from "./Input";

export const ExpenseForm = () => {

  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  }); // input value is always a string from textInput

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input label="Amount" style={styles.rowInput} textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: inputChangedHandler.bind(this, "amount"),
          value: inputValues.amount,
        }} />
        <Input label="Date" style={styles.rowInput} textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: inputChangedHandler.bind(this, "date"),
          value: inputValues.date,
        }} />
      </View>
      <Input label="Description" textInputConfig={{
        multiline: true,
        //autoCorrect: false, // set to true by default
        autoCapitalize: "sentences",
        onChangeText: inputChangedHandler.bind(this, "description"),
        value: inputValues.description,
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
