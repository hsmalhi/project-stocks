import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import React from 'react';

import PortfolioScreen from "./app/screens/Portfolio";
import WatchListScreen from "./app/screens/WatchList";
import MarketsScreen from "./app/screens/Markets";
import CommunityScreen from "./app/screens/Community";
import ProfileScreen from "./app/screens/Profile";

import Icon from "react-native-vector-icons/Feather";
const iconSize = 24;

const TabNavigator = createBottomTabNavigator(
  {
    Portfolio: {
      screen: PortfolioScreen,
      navigationOptions: {
        tabBarLabel: "Portfolio",
        // tabBarIcon: () => <Icon name="dollar-sign" size={iconSize} />
      }
    },
    WatchList: {
      screen: WatchListScreen,
      navigationOptions: {
        tabBarLabel: "Watch List",
        tabBarIcon: () => <Icon name="eye" size={iconSize} />
      }
    },
    Markets: {
      screen: MarketsScreen,
      navigationOptions: {
        tabBarLabel: "Markets",
        tabBarIcon: () => <Icon name="trending-up" size={iconSize} />
      }
    },
    Community: {
      screen: CommunityScreen,
      navigationOptions: {
        tabBarLabel: "Community",
        tabBarIcon: () => <Icon name="message-circle" size={iconSize} />
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: () => <Icon name="user" size={iconSize} />
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName: string;
        if (routeName === 'Portfolio') {
          iconName = 'dollar-sign';
        }
        //Set up code to set up other icons based on the routeName

        return <Icon name={iconName} size={iconSize} />;
      }
    })
  }
);

export default createAppContainer(TabNavigator);
