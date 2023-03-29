import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddTodo({submitHandler}) {
   const [text, setText] = useState("");
   return (
      <View>
         <Text>Add Todo</Text>
         <TextInput
            style={styles.input}
            placeholder="add todo ..."
            onChangeText={(e) => setText(e)}
         />
         <Button
            onPress={() => submitHandler(text)}
            title="add todo"
            color="coral"
         />
      </View>
   );
}

const styles = StyleSheet.create({
   input: {
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomWidth: 1,
      borderBottomColor: "#ddd",
   },
});
