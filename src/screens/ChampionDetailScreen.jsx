import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export const ChampionDetailScreen = ({ route, navigation }) => {
  const { name, desc, info } = route.params;

  const url =
    "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" +
    name +
    "_0.jpg";

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Image
        style={styles.image}
        source={{
          uri: url,
        }}
      />
      <Text>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#0A323C",
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0AC8B9",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  image: {
    width: 233,
    height: 424,
    marginLeft: "auto",
    marginRight: "auto",
  },
  desc: {
    color: "#0AC8B9",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
});
