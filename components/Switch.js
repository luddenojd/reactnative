import { useState } from "react";
import { View, Switch, StyleSheet, Button, Image } from "react-native";
import beerglass from "../assets/beerglass.png";

export default function Switching({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const pressHandler = () => {
    navigation.navigate("Details");
  };

  const pressHandler2 = () => {
    navigation.navigate("Beer");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.beerStyle} source={beerglass} />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Button
        style={styles.buttonStyle}
        title={"rate some brews"}
        onPress={pressHandler2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  beerStyle: {
    width: 300,
    height: 350,
  },
  buttonStyle: {
    backgroundColor: "yellow",
  },
});
