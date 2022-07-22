import { View } from "react-native";
import { Input } from "./Input";

export const ExpenseForm = () => {

  const amountChangedHandler = () => {};

  return (
    <View>
      <Input label="Amout" textInputConfig={{
        keyboardType: 'decimal-pad',
        onChangeText: amountChangedHandler,
       }} />
      <Input label="Date" textInputConfig={{
        placeholder: "YYYY-MM-DD",
        maxLength: 10,
        onChangeText: null,
       }} />
      <Input label="Description" textInputConfig={{

       }} />
    </View>
  );
}
