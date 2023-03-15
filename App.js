// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./src/components/Header";
import TodoAdder from "./src/components/TodoAdder";
import TodoItem from "./src/components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, description: "Buy groceries" },
    { id: 2, description: "Sell groceries" },
    { id: 3, description: "Buy more groceries" },
    { id: 4, description: "Sell more groceries" },
    { id: 5, description: "Profit" },
  ]);

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id);
    });
  };

  // const addTodo = (todo) => {
  //   setTodos([...todos, todo]);
  // };

  const addTodo = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ id: Math.random(), description: text }, ...prevTodos];
      });
    } else {
      Alert.alert("oops", "Todos must be over 3 chars long", [
        {
          text: "Understood",
          onPress: () => console.log("understood button pressed"),
        },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("Remove keyboard");
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <TodoAdder addHandler={addTodo} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={(props) => (
                <TodoItem item={props.item} pressHandler={deleteTodo} />
              )}
              keyExtractor={(item) => item.id}
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
    marginTop: StatusBar.currentHeight,
  },
  content: {
    // backgroundColor: "red",
    // height: 500,
    padding: 40,
  },
  list: {
    // backgroundColor: "blue",
    // height: 100,
    marginTop: 40,
  },
});
