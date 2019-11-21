import React from "react";
import { Text, View } from "react-native";
import Styles from "../Styles";

interface StockDetailsProps {
  navigation: any;
}

export default function StockDetails(props: StockDetailsProps) {
  const details = props.navigation.getParam("details", []);
  const ticker = details["1. symbol"];
  const name = details["2. name"];

  return (
    <View style={{ flex: 1 }}>
      <Text style={ Styles.HeaderStyles }>{ticker}</Text>
      <Text style={ Styles.SubheaderStyles }>{name}</Text>
    </View>
  );
}

StockDetails.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("details")["1. symbol"]
  };
};
