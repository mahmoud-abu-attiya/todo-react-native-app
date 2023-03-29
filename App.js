import {
   StyleSheet,
   View,
   FlatList,
   TouchableWithoutFeedback,
	Alert,
	Keyboard,
} from "react-native";
import Header from "./components/header";
import { useState } from "react";
import TodoItem from "./components/todoItems";
import AddTodo from "./components/addTodo";

export default function App() {
   const [todos, setTodos] = useState([
      { text: "buy coffee", key: "1" },
      { text: "create an app", key: "2" },
      { text: "play on the switch", key: "3" },
   ]);

   const pressHandler = (key) => {
      setTodos((prevTodos) => {
         return prevTodos.filter((todo) => todo.key != key);
      });
   };

   const submitHandler = (text) => {
		let todoExists = todos.find(todo => todo.text === text);
			if (todoExists) {
				Alert.alert("OOPS!", "Todo already exists", [
					{ text: "Understood", onPress: () => console.log("alert closed") },
				]);
			} else if (text.length < 3) {
				Alert.alert("OOPS!", "Todos must be at lest 3 chars long", [
					{ text: "Understood", onPress: () => console.log("alert closed") },
				]);
			} else {
				setTodos((prevTodos) => {
					return [
						{ text: text, key: Math.random().toString() },
						...prevTodos,
					];
				});
			}
		}

   return (
		<TouchableWithoutFeedback onPress={() => {
			Keyboard.dismiss();
			console.log("dismissed keyboard");
		}}>
      <View style={styles.container}>
         <Header />
         <View style={styles.content}>
            <AddTodo submitHandler={submitHandler} />
            <View style={styles.list}>
               <FlatList
                  data={todos}
                  renderItem={({ item }) => (
                     <TodoItem item={item} pressHandler={pressHandler} />
                  )}
               />
            </View>
         </View>
      </View>
		</TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
   },
   content: {
      padding: 40,
		flex: 1,
   },
   list: {
      marginTop: 20,
		flex: 1,
   },
});
