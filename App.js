import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import FetchCities from "./components/FetchCities";
import Switch from "./components/Switch";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FetchBeer from "./components/FetchBeer";

export default function App() {
  const [name, setName] = useState("Text");
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Switch} />
        <Stack.Screen name="Details" component={FetchCities} />
        <Stack.Screen name="Beer" component={FetchBeer} />
      </Stack.Navigator>
      {/* <View style={styles.container}>
        <Text style={{ color: "white" }}>
          Open up App.js to start working on your app!
        </Text>

        <Text style={{ color: "white" }}>Hello world!</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setName(text)}
          onSubmitEditing={() => {
            alert(name);
          }}
          value={name}
        />
        <Button
          onPress={() => {
            alert();
          }}
          title="Hämta städer"
        />
        <FetchCities />
        <Switch />

      </View> */}
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
});

// export const images = {
//   beerpics: {
//     picture: require("./pictures/heineken.png"),
//     picture: require("./pictures/norrlandsguld.png"),
//     picture: require("./pictures/westcoast.png"),
//     picture: require("./pictures/brooklynlager.png"),
//     picture: require("./pictures/falcon.png"),
//     picture: require("./pictures/amundsen.png"),
//     picture: require("./pictures/defenderipa.png"),
//     picture: require("./pictures/lagunitasipa.png"),
//     picture: require("./pictures/poppels.png"),
//     picture: require("./pictures/bigwave.png"),
//     picture: require("./pictures/punkipa.png"),
//     picture: require("./pictures/tooldipa.png"),
//     picture: require("./pictures/melleruds.png"),
//     picture: require("./pictures/peroni.png"),
//     picture: require("./pictures/staropramen.png"),
//     picture: require("./pictures/stella.png"),
//     picture: require("./pictures/pabst.png"),
//     picture: require("./pictures/sortguld.png"),
//     picture: require("./pictures/pripps.png"),
//     picture: require("./pictures/lonestar.png"),
//     picture: require("./pictures/karlovacko.png"),
//     picture: require("./pictures/arboga.png"),
//     picture: require("./pictures/crocodile.png"),
//     picture: require("./pictures/redstripe.png"),
//     picture: require("./pictures/carlsberghof.png"),
//   },
// };
