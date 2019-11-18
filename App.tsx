import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import env from './.env.json';

import PortfolioScreen from "./app/screens/Portfolio";
import WatchlistScreen from "./app/screens/Watchlist";
import MarketsScreen from "./app/screens/Markets";
import CommunityScreen from "./app/screens/Community";
import ProfileScreen from "./app/screens/Profile";

import Icon from "react-native-vector-icons/Feather";

const TabNavigator = createBottomTabNavigator(
  {
    Portfolio: {
      screen: PortfolioScreen,
      navigationOptions: {
        tabBarLabel: "Portfolio"
      }
    },
    Watchlist: {
      screen: WatchlistScreen,
      navigationOptions: {
        tabBarLabel: "Watchlist"
      }
    },
    Markets: {
      screen: MarketsScreen,
      navigationOptions: {
        tabBarLabel: "Markets"
      }
    },
    Community: {
      screen: CommunityScreen,
      navigationOptions: {
        tabBarLabel: "Community"
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "Profile"
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        const iconSize = 24;

        let iconName: string;
        if (routeName === "Portfolio") {
          iconName = "dollar-sign";
        } else if (routeName === "Watchlist") {
          iconName = "eye";
        } else if (routeName === "Markets") {
          iconName = "trending-up";
        } else if (routeName === "Community") {
          iconName = "message-circle";
        } else if (routeName === "Profile") {
          iconName = "user";
        }

        return <Icon name={iconName} size={iconSize} color={focused ? '#5491DD' : '#9E9E9E'}/>;
      }
    })
  }
);

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  const headerTitle = routeName;

  return {
    headerTitle,
  };
};

const AppNavigator = createStackNavigator({
  Home: TabNavigator
});

export default createAppContainer(AppNavigator);
