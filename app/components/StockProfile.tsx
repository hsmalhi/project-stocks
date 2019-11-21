import React from 'react';
import { View } from "react-native";
import { Text } from 'react-native-elements';
import getByIndex from "../utils/helpers";

import Styles from "../Styles";

interface StockProfileProps {
  data: any
}

export default function StockProfile(props: StockProfileProps) {
  if (props.data) {
    console.log(props.data);
  }

  return (
    <View>
      {/* <Text style={ Styles.HeaderStyles }>{props.data && props.data.close}</Text>
      <Text style={ Styles.SubheaderStyles }>{props.data && props.data.open}</Text> */}
    </View>
  );
}