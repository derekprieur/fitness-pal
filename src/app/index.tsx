import { StyleSheet, View } from "react-native";
import FoodListItem from "../components/FoodListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <FoodListItem
        item={{
          name: "Pizza",
          calories: 350,
          brand: "Dominos",
        }}
      />
      <FoodListItem
        item={{
          name: "Pizza",
          calories: 350,
          brand: "Dominos",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
    gap: 5,
  },
});
