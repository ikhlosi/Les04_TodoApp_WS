// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StatusBar, StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./src/components/Header";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, description: "Buy groceries" },
    { id: 2, description: "Sell groceries" },
    { id: 3, description: "Buy more groceries" },
    { id: 4, description: "Sell more groceries" },
    { id: 5, description: "Profit" },
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            // numColumns={2}
            data={todos}
            renderItem={(props) => (
              <Text>
                {props.index} - {props.item.description}
              </Text>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
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
