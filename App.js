import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  var [name, setName] = useState("Bala");

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <TextInput
        multiline
        style={styles.textInput}
        placeholder="Hello"
        defaultValue={name}
        onChangeText={(val) => setName(val)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#777",
  },
});
