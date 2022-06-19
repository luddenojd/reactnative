import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Switch from "./components/Switch";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FetchBeer from "./components/FetchBeer";
import AddNewBrew from "./components/AddBeer";

export default function App() {
  const [name, setName] = useState("Text");
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.navigatorStyle}>
        <Stack.Screen name="Home" component={Switch} />
        <Stack.Screen name="Details" component={AddNewBrew} />
        <Stack.Screen name="Beer" component={FetchBeer} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: "white",
    borderWidth: 1,
  },

  navigatorStyle: {
    backgroundColor: "blue",
  },
});
