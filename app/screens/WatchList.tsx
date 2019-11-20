import React from "react";
import { View } from "react-native";
import TickerSearch from "../components/TickerSearch";

export default function Watchlist(props: any) {
  return (
    <View style={{ flex: 1 }}>
      <TickerSearch navigation={props.navigation}/>
    </View>
  );
}

Watchlist.navigationOptions = {
  title: "Watchlist"
};
