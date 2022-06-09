import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Text");
  return (
    <View style={styles.container}>
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
      <StatusBar style="auto" />
    </View>
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
