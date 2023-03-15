import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const TodoItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => props.pressHandler(props.item.id)}
    >
      <Text>{props.item.description}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
