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
  useWindowDimensions,
} from "react-native";
import Header from "./src/components/Header";
import TodoAdder from "./src/components/TodoAdder";
import TodoItem from "./src/components/TodoItem";
import uuid from "react-native-uuid";

export default function App() {
  const [todos, setTodos] = useState([
    { id: uuid.v4(), description: "Buy groceries" },
    { id: uuid.v4(), description: "Sell groceries" },
    { id: uuid.v4(), description: "Buy more groceries" },
    { id: uuid.v4(), description: "Sell more groceries" },
    { id: uuid.v4(), description: "Profit" },
  ]);

  const { height, width } = useWindowDimensions();

  console.log(height);

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id);
    });
  };

  const addTodoObj = (todoDescription) => {
    if (todoDescription < 3) {
      Alert.alert("oops", "Todos must be over 3 chars long", [
        {
          text: "Understood",
          onPress: () => console.log("understood button pressed"),
        },
      ]);
      return;
    }
    const newTodo = { id: uuid.v4(), description: todoDescription };
    setTodos([...todos, newTodo]);
  };

  const addTodo = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ id: uuid.v4(), description: text }, ...prevTodos];
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
    flex: 1,
  },
  list: {
    // backgroundColor: "blue",
    // height: 100,
    marginTop: 40,
    flex: 1,
  },
});
