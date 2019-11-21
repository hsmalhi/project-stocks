import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Styles from "../Styles";
import AV from "../utils/alpha_vantage_api";

import StockProfile from "../components/StockProfile";

interface StockDetailsProps {
  navigation: any;
}

export default function StockDetails(props: StockDetailsProps) {
  const details = props.navigation.getParam("details", []);
  const ticker = details["1. symbol"];
  const name = details["2. name"];

  let data: any;

  const [ refreshTime, setRefreshTime ] = useState(null);
  const [ timeSeries, setTimeSeries ] = useState(null);

  useEffect(() => {
    updateData(5);
  }, []);

  const updateData = async function(minutes: number) {
    try{
      data = await AV.getIntradaySeries(ticker, minutes);
      if (data) {
        setRefreshTime(data["Meta Data"]["3. Last Refreshed"]);
        setTimeSeries(data[`Time Series (${minutes}min)`]);
      }
    } catch(error) {
      console.log("Error retrieving quote data!")
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={ Styles.HeaderStyles }>{ticker}</Text>
      <Text style={ Styles.SubheaderStyles }>{name}</Text>
      <Text>Last refreshed: {refreshTime}</Text>
      <StockProfile data={timeSeries}></StockProfile>
    </View>
  );
}

StockDetails.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("details")["1. symbol"]
  };
};
