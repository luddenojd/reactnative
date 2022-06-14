import { useEffect, useState } from "react";
import { FlatList, Text, View, Image, StyleSheet } from "react-native";
import Rating from "./RatingComponent";
export default function FetchBeers({ navigation }) {
  const [beers, setBeers] = useState(null);
  // const picture = navigation.navigate("beerpics", { picture });
  useEffect(() => {
    fetch("http://192.168.3.76:3000/api/beers")
      .then((response) => response.json())
      .then((result) => {
        setBeers(result.beers);
        console.log(result.beers);
      });
  }, []);
  return (
    <FlatList
      data={beers}
      renderItem={({ item }) => (
        <View style={styles.slide}>
          <Text style={styles.textStyle}>
            This brew is titled {item.name} and has its origin from{" "}
            {item.country}, the type of this brew is: {item.type}.
          </Text>
          <Image source={{ uri: item.picture }} style={styles.img} />
          <Rating />
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  img: {
    width: 80,
    height: 150,
    marginTop: 10,
    marginBottom: 10,
  },
  slide: {
    display: "flex",
    alignItems: "center",
    border: "solid black 1px",
    backgroundColor: "lightblue",
  },
  textStyle: {
    fontSize: 20,
    margin: 20,
  },
});
