import React, { useEffect } from "react";
import { Text, View } from "react-native";

interface StockDetailsProps {
  navigation: any;
}

export default function StockDetails(props: StockDetailsProps) {
  const details = props.navigation.getParam("details", []);
  const ticker = details["1. symbol"];

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{ticker}</Text>
    </View>
  );
}

StockDetails.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("details")["1. symbol"]
  };
};
