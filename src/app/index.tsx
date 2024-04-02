import { StyleSheet, View, FlatList } from "react-native";
import FoodListItem from "../components/FoodListItem";

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
  return (
    <View style={styles.container}>
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
  },
});
