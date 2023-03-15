import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = (props) => {
  return (
    <TouchableOpacity onPress={() => props.pressHandler(props.item.id)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={20} color="black" />
        <Text style={styles.itemText}>{props.item.description}</Text>
      </View>
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
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    margin: 10,
  },
});
