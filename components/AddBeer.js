import { TextInput, SafeAreaView, StyleSheet, Button } from "react-native";
import { useState } from "react";

export default function AddNewBrew() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  fetch("http://192.168.3.76:3000/api/beers", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstParam: name,
      secondParam: country,
    }),
  });
  return (
    <SafeAreaView>
      <TextInput
        onChangeText={(newName) => setName(newName)}
        defaultValue={name}
      />

      <Button
        title={"add"}
        onPress={() => {
          console.log(name);
        }}
      />
      <TextInput
        onChangeText={(newCountry) => setCountry(newCountry)}
        defaultValue={country}
      />
      <Button
        title={"add"}
        onPress={() => {
          console.log(country);
        }}
      />
    </SafeAreaView>
  );
}
