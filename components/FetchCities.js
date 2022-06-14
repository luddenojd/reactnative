import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
export default function FetchCities() {
  const [cities, setCities] = useState(null);
  useEffect(() => {
    fetch("https://avancera.app/cities/")
      .then((response) => response.json())
      .then((result) => {
        setCities(result);
        console.log(result);
      });
  }, []);
  return (
    <View>
      <FlatList
        data={cities}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(city) => city.id}
      />
    </View>
  );
}
