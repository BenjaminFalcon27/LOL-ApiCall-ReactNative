import { Card, Text } from "react-native-paper";
import { ViewStyle, TextStyle, Image, View } from "react-native";
// import { useImage } from "../hooks/useImages";
import { Routes } from "../navigation/Routes";
import { useNavigation } from "@react-navigation/native";

interface Props {
  item: {
    id: string;
    name: string;
    tags: string[];
    title: string;
    blurb: string;
  };
}

const styles = {
  container: {
    backgroundColor: "#0A323C",
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0AC8B9",
    overflow: "hidden",
  } as ViewStyle,
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10,
  } as TextStyle,
  tagsContainer: {
    margin: 10,
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
  } as ViewStyle,
  tag: {
    backgroundColor: "#CDFAFA",
    borderRadius: 10,
    padding: 5,
    marginRight: 5,
    marginBottom: 5,
  } as TextStyle,
  tagText: {
    color: "#0A323C",
    fontSize: 12,
  } as TextStyle,
  title: {
    fontSize: 20,
    color: "#0AC8B9",
    fontWeight: "bold",
  } as TextStyle,
  tagTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
    color: "#0AC8B9",
  } as TextStyle,
  tagPart: {
    flexDirection: "row",
    width: "100%",
    display: "flex",
  } as ViewStyle,
};

export const CardChampion = ({ item }: Props) => {
  const navigation = useNavigation<any>();

  function navigateToChampionDetailScreen() {
    navigation.navigate(Routes.CHAMPION_DETAIL_SCREEN, { name: item.name, desc: item.blurb });
  }

  const imageURL =
    `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/` +
    item.id +
    `_0.jpg`;

  return (
    <Card style={styles.container} onPress={navigateToChampionDetailScreen}>
      <Card.Title title={item.name} style={styles.title} titleStyle={{color: '#CDFAFA', fontWeight: 'bold'}} subtitle={item.title} subtitleStyle={{color: '#CDFAFA'}}/>
      <Card.Cover
        source={{
          uri: imageURL,
        }}
      />
      <Card.Content>
        <View style={styles.tagPart}>
          <Text style={styles.tagTitle}>Tags:</Text>
          <View style={styles.tagsContainer}>
            {item.tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};
