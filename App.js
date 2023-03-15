// import { StatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <View></View>
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
