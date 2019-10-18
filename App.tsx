import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import PortfolioScreen from "./app/screens/Portfolio";
import WatchListScreen from "./app/screens/WatchList";
import MarketsScreen from "./app/screens/Markets";
import CommunityScreen from "./app/screens/Community";
import ProfileScreen from "./app/screens/Profile";

import Icon from 'react-native-vector-icons/FontAwesome';

const TabNavigator = createBottomTabNavigator(
  {
    Portfolio: { screen: PortfolioScreen },
    WatchList: { screen: WatchListScreen },
    Markets: { screen: MarketsScreen },
    Community: { screen: CommunityScreen },
    Profile: { screen: ProfileScreen }
  },
  // {
  //   defaultNavigationOptions: ({ navigation }) => ({
  //     tabBarIcon: () => {
  //       return <Icon name="rocket" size={30} color="#900" />;
  //     },
  //   })
  // }
);

export default createAppContainer(TabNavigator);
