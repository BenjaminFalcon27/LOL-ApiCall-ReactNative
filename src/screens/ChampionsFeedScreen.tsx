import React from "react";
import { SafeAreaView, StyleSheet, FlatList, Text } from "react-native";
import { CardChampion } from "../components/Card";
import { useChampions } from "../hooks/useChampions";

export const ChampionsFeedScreen = () => {
  const { data, isError, isLoading } = useChampions();
  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Error</Text>;

  const Data = data.data;
  const championValues = Object.values(Data);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={championValues}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <CardChampion item={item} />}
      />
      {/* <Text>{JSON.stringify((Champions))}</Text> */}
      {/* <Text>{JSON.stringify((championNames))}</Text> */}
      {/* <Text>{JSON.stringify((championValues))}</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 0,
    backgroundColor: "#0A1428",
  },
  elementList: {
    marginTop: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  model: {
    fontSize: 16,
  },
  crew: {
    fontSize: 16,
  },
  rating: {
    fontSize: 16,
  },
  cost: {
    fontSize: 16,
  },
});
