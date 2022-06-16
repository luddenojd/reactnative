import { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import Rating from "./RatingComponent";
import { SwiperFlatList } from "react-native-swiper-flatlist";
export default function FetchBeers({ navigation }) {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    fetch("http://192.168.0.33:3000/api/beers")
      .then((response) => response.json())
      .then((result) => {
        setBeers(result.beers);
        console.log(result.beers);
      });
  }, []);
  return (
    <SwiperFlatList
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

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 200,
    marginTop: 10,
    marginBottom: 10,
    resizeMode: "contain",
  },
  slide: {
    display: "flex",
    alignItems: "center",
    border: "solid black 1px",
    width,

    backgroundColor: "black",
  },
  textStyle: {
    fontSize: 20,
    margin: 20,
    color: "white",
  },
});
