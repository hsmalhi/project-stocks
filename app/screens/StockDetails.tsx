import React from "react";
import { Text, View } from "react-native";

export default function StockDetails() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>StockDetails!</Text>
    </View>
  );
}

StockDetails.navigationOptions = {
  title: "StockDetails"
};
