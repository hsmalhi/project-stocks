import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import Portfolio from "./app/screens/Portfolio";
import Watchlist from "./app/screens/Watchlist";
import Markets from "./app/screens/Markets";
import Community from "./app/screens/Community";
import Profile from "./app/screens/Profile";
import StockDetails from "./app/screens/StockDetails";

import Icon from "react-native-vector-icons/Feather";

const tabIconSize = 24;

const PortfolioStack = createStackNavigator({
  Portfolio: { screen: Portfolio }
});

const WatchlistStack = createStackNavigator({
  Watchlist: { screen: Watchlist },
  StockDetails: { screen: StockDetails }
});

const MarketsStack = createStackNavigator({
  Markets: { screen: Markets }
});

const CommunityStack = createStackNavigator({
  Community: { screen: Community }
});

const ProfileStack = createStackNavigator({
  Profile: { screen: Profile }
});

const TabStack = createBottomTabNavigator(
  {
    Portfolio: {
      screen: PortfolioStack,
      navigationOptions: {
        tabBarLabel: "Portfolio",
        tabBarIcon: ({ focused }) => {
          return (
            <Icon
              name="dollar-sign"
              size={tabIconSize}
              color={focused ? "#5491DD" : "#9E9E9E"}
            />
          );
        }
      }
    },
    Watchlist: {
      screen: WatchlistStack,
      navigationOptions: {
        tabBarLabel: "Watchlist",
        tabBarIcon: ({ focused }) => {
          return (
            <Icon
              name="eye"
              size={tabIconSize}
              color={focused ? "#5491DD" : "#9E9E9E"}
            />
          );
        }
      }
    },
    Markets: {
      screen: MarketsStack,
      navigationOptions: {
        tabBarLabel: "Markets",
        tabBarIcon: ({ focused }) => {
          return (
            <Icon
              name="trending-up"
              size={tabIconSize}
              color={focused ? "#5491DD" : "#9E9E9E"}
            />
          );
        }
      }
    },
    Community: {
      screen: CommunityStack,
      navigationOptions: {
        tabBarLabel: "Community",
        tabBarIcon: ({ focused }) => {
          return (
            <Icon
              name="message-circle"
              size={tabIconSize}
              color={focused ? "#5491DD" : "#9E9E9E"}
            />
          );
        }
      }
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ focused }) => {
          return (
            <Icon
              name="user"
              size={tabIconSize}
              color={focused ? "#5491DD" : "#9E9E9E"}
            />
          );
        }
      }
    }
  }
);

const MainStack = createSwitchNavigator(
  {
    Home: TabStack
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(MainStack);
