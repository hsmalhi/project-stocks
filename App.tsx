import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import PortfolioScreen from "./app/screens/Portfolio";
import WatchlistScreen from "./app/screens/Watchlist";
import MarketsScreen from "./app/screens/Markets";
import CommunityScreen from "./app/screens/Community";
import ProfileScreen from "./app/screens/Profile";

import Icon from "react-native-vector-icons/Feather";

const PortfolioStack = createStackNavigator( {PortfolioScreen} );
const WatchlistStack = createStackNavigator( {WatchlistScreen} );
const MarketsStack = createStackNavigator( {MarketsScreen} );
const CommunityStack = createStackNavigator( {CommunityScreen} );
const ProfileStack = createStackNavigator( {ProfileScreen} );

const iconSize = 24;

PortfolioStack.navigationOptions = {
  tabBarLabel: 'Portfolio',
  tabBarIcon: ({ focused }) => {
    return <Icon name="dollar-sign" size={iconSize} color={focused ? '#5491DD' : '#9E9E9E'}/>
  }
};

WatchlistStack.navigationOptions = {
  tabBarLabel: 'Watchlist',
  tabBarIcon: ({ focused }) => {
    return <Icon name="eye" size={iconSize} color={focused ? '#5491DD' : '#9E9E9E'}/>
  }
};

MarketsStack.navigationOptions = {
  tabBarLabel: 'Markets',
  tabBarIcon: ({ focused }) => {
    return <Icon name="trending-up" size={iconSize} color={focused ? '#5491DD' : '#9E9E9E'}/>
  }
};

CommunityStack.navigationOptions = {
  tabBarLabel: 'Community',
  tabBarIcon: ({ focused }) => {
    return <Icon name="message-circle" size={iconSize} color={focused ? '#5491DD' : '#9E9E9E'}/>
  }
};

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => {
    return <Icon name="user" size={iconSize} color={focused ? '#5491DD' : '#9E9E9E'}/>
  }
};

export default createAppContainer(
  createBottomTabNavigator({
    PortfolioStack,
    WatchlistStack,
    MarketsStack,
    CommunityStack,
    ProfileStack
  })
);
