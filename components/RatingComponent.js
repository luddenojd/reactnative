import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function Rating() {
  const [defaultRating, setdefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  const starImgFilled =
    "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png";
  const starImgCorner =
    "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setdefaultRating(item)}
            >
              <Image
                style={styles.starImgStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImgFilled }
                    : { uri: starImgCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}> Rate this brew! </Text>
      <CustomRatingBar />
      <Text style={styles.textStyle}>
        {defaultRating + " / " + maxRating.length}
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={() =>
          alert("You gave this brew a rating of " + defaultRating + " stars!")
        }
      >
        <Text style={styles.textButton}>Get selected value</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
  },
  textStyle: {
    textAlign: "center",
    fontSize: 23,
    marginTop: 20,
    color: "white",
  },
  customRatingBarStyle: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  starImgStyle: {
    width: 40,
    height: 40,
    resizeMode: "cover",
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    padding: 15,
    backgroundColor: "green",
  },
  textButton: {
    color: "white",
  },
});
