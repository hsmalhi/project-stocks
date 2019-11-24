import React, { useState } from 'react';
import { View } from "react-native";
import { Text } from 'react-native-elements';
import getByIndex from "../utils/helpers";

import Styles from "../Styles";

interface StockProfileProps {
  data: any
}

export default function StockProfile(props: StockProfileProps) {
  const [ current, setCurrent ] = useState(null);
  const [ initial, setInitial ] = useState(null);

  if (props.data && !current) {
    setCurrent(getByIndex(props.data, 0));
    const currentDate = Object.keys(props.data)[0].split(" ")[0];
    setInitial(props.data[`${currentDate} 09:35:00`]);
  }

  return (
    <View>
      <Text style={ Styles.HeaderStyles }>{current && Math.round(current["4. close"]*100)/100}</Text>
      <Text style={ Styles.SubheaderStyles }>{current && Math.round((Number(current["4. close"]) - Number(initial["1. open"]))*100)/100}</Text>
    </View>
  );
}