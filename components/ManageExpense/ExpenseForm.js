import { useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Input } from "./Input";
import { Button } from "../UI/Button";
import { getFormattedDate } from "../../util/date";
import { GlobalStyles } from "../../constants/styles";

export const ExpenseForm = ({ submitButtonLabel, onCancel, onSubmit, defaultValues}) => {

  const [inputs, setInputs] = useState({
    amount: {value: defaultValues ? defaultValues.amount.toString() : "", isValid: true},
    date: {value: defaultValues ? getFormattedDate(defaultValues.date) : "", isValid: true},
    description: {value: defaultValues ? defaultValues.description.toString() : "", isValid: true},
  }); // input value is always a string from textInput

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: {value: enteredValue, isValid: true},
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: parseInt(inputs.amount.value),
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = isNaN(expenseData) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date'; // Invalid Date returned by Date method when invalid date created
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if ( !amountIsValid || !dateIsValid || !descriptionIsValid) {
      // Alert.alert("Invalid Input", "Please check your input values")
      setInputs((curInputs) => {
        return {
          amount: {value: curInputs.amount.value, isValid: amountIsValid},
          date: {value: curInputs.date.value, isValid: dateIsValid},
          description: {value: curInputs.description.value, isValid: descriptionIsValid},
        };
      });
      return;
    };

    onSubmit(expenseData);
  };

  const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid ;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input invalid={!inputs.amount.isValid} label="Amount" style={styles.rowInput} textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: inputChangedHandler.bind(this, "amount"),
          value: inputs.amount.value,
        }} />
        <Input invalid={!inputs.date.isValid} label="Date" style={styles.rowInput} textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: inputChangedHandler.bind(this, "date"),
          value: inputs.date.value,
        }} />
      </View>
      <Input invalid={!inputs.description.isValid} label="Description" textInputConfig={{
        multiline: true,
        //autoCorrect: false, // set to true by default
        autoCapitalize: "sentences",
        onChangeText: inputChangedHandler.bind(this, "description"),
        value: inputs.description.value,
       }}
      />
      {formIsInvalid && <Text style={styles.errorText}>Invalid input values - please check your input data</Text>}
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
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
});
