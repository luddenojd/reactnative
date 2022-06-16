import { useState } from "react";
import {
  View,
  Switch,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import beerglass from "../assets/beerglass.png";
import { material } from "react-native-typography";

export default function Switching({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Details");
  };

  const pressHandler2 = () => {
    navigation.navigate("Beer");
  };

  return (
    <View style={styles.container}>
      <Text style={[material.display3White, styles.bigText]}>
        BIRA
        <Image style={styles.beerStyle} source={beerglass} />
      </Text>
      <Text style={styles.textStyle}>Rate and add beer!</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle1} onPress={pressHandler2}>
          <Text style={styles.textStyle}>Rate Brews!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle2} onPress={pressHandler}>
          <Text style={styles.textStyle}>Add Brews!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  beerStyle: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  buttonStyle1: {
    backgroundColor: "black",
    borderColor: "yellow",
    margin: 15,
    borderWidth: 1,
    padding: 2,
  },
  buttonStyle2: {
    backgroundColor: "black",
    borderColor: "yellow",
    margin: 15,
    borderWidth: 1,
    padding: 2,
  },
  textStyle: {
    color: "yellow",
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 100,
  },
  bigText: {
    color: "yellow",
    fontSize: 60,
  },
});
