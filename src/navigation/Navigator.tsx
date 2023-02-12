import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ChampionsFeedScreen} from '../screens/ChampionsFeedScreen';
import {ChampionDetailScreen} from '../screens/ChampionDetailScreen';
import { Routes } from './Routes';

const Stack = createNativeStackNavigator();

export function Navigator() {
  return (
      <Stack.Navigator initialRouteName={Routes.CHAMPION_FEED_SCREEN}>
        <Stack.Screen name={Routes.CHAMPION_FEED_SCREEN} component={ChampionsFeedScreen} />
        <Stack.Screen name={Routes.CHAMPION_DETAIL_SCREEN} component={ChampionDetailScreen} />
      </Stack.Navigator>
  );
}