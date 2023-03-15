import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const TodoAdder = ({ addHandler }) => {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        onChangeText={(value) => setText(value)}
        value={text}
        placeholder="New todo..."
      />
      <Button
        title="ADD TODO"
        onPress={() =>
          //   addHandler({
          //     id: Math.floor(Math.random() * 100),
          //     description: text,
          //   })
          addHandler(text)
        }
      />
    </View>
  );
};

export default TodoAdder;

const styles = StyleSheet.create({});
