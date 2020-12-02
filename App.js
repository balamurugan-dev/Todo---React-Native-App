import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  var [names, setName] = useState([
    { name: "bala", uId: "1" },
    { name: "Haha", uId: "2" },
    { name: "Tata", uId: "3" },
    { name: "Tata", uId: "4" },
    { name: "Tata", uId: "5" },
    { name: "Tata", uId: "6" },
    { name: "Tata", uId: "7" },
    { name: "Tata", uId: "8" },
    { name: "Tata", uId: "9" },
    { name: "Tata", uId: "10" },
    { name: "Tata", uId: "11" },
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setName((prevNames) => prevNames.filter((name) => name.uId != id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.uId}
        data={names}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.uId)}>
            <Text style={styles.nameItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
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
    marginHorizontal: 10,
  },
});
