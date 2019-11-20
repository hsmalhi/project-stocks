import React from "react";
import { View } from "react-native";
import TickerSearch from "../components/TickerSearch";

interface WatchlistProps {
  navigation: any
}

export default function Watchlist(props: WatchlistProps) {
  return (
    <View style={{ flex: 1 }}>
      <TickerSearch navigation={props.navigation}/>
    </View>
  );
}

Watchlist.navigationOptions = {
  title: "Watchlist"
};
