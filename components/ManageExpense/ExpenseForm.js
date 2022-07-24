import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input } from "./Input";
import { Button } from "../UI/Button";
import { getFormattedDate } from "../../util/date";

export const ExpenseForm = ({ submitButtonLabel, onCancel, onSubmit, defaultValues}) => {

  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? getFormattedDate(defaultValues.date) : "",
    description: defaultValues ? defaultValues.description.toString() : "",
  }); // input value is always a string from textInput

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };
    onSubmit(expenseData);
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
       }}
      />
      <View style={styles.buttons}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>Cancel</Button>
        <Button onPress={submitHandler} style={styles.button}>{submitButtonLabel}</Button>
      </View>
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
