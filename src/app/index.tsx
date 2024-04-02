import { StyleSheet, View, FlatList, TextInput, Button } from "react-native";
import FoodListItem from "../components/FoodListItem";
import { useState } from "react";

const foodItems = [
  {
    name: "Pizza",
    calories: 350,
    brand: "Dominos",
  },
  {
    name: "Burger",
    calories: 250,
    brand: "McDonalds",
  },
  {
    name: "Fries",
    calories: 200,
    brand: "KFC",
  },
];

export default function App() {
  const [search, setSearch] = useState("");

  const performSearch = () => {
    console.warn("Searching for: ", search);
    setSearch("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        style={styles.input}
        value={search}
        onChangeText={setSearch}
      />
      {search && <Button title="Search" onPress={performSearch} />}
      <FlatList
        data={foodItems}
        renderItem={({ item }) => <FoodListItem item={item} />}
        contentContainerStyle={{
          gap: 5,
        }}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    gap: 10,
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 20,
  },
});
