import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  var [names, setName] = useState([
    { name: "bala", key: "1" },
    { name: "Haha", key: "2" },
    { name: "Tata", key: "3" },
    { name: "Tata", key: "4" },
    { name: "Tata", key: "5" },
    { name: "Tata", key: "6" },
    { name: "Tata", key: "7" },
    { name: "Tata", key: "8" },
    { name: "Tata", key: "9" },
    { name: "Tata", key: "10" },
    { name: "Tata", key: "11" },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Names</Text>
        {names.map((name) => (
          <View style={styles.nameItem} key={name.key}>
            <Text>{name.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  nameItem: {
    backgroundColor: "green",
    padding: 30,
    marginBottom: 10,
  },
});
