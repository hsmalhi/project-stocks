import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { SearchBar, ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import AV from "../utils/alpha_vantage_api";

interface TickerSearchProps {
  navigation: any;
}

export default function TickerSearch(props: TickerSearchProps) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updateResults();
  }, [search]);

  const updateSearch = function(text: string) {
    setSearch(text);
  };

  const updateResults = async function() {
    try {
      if (search !== "") {
        setLoading(true);
        const results = await AV.searchTickers(search);
        if (results) {
          setSearchResults(results);
          setLoading(false);
        }
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.log("Error retrieving quote data!")
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        lightTheme
        clearIcon
        round
        showLoading={loading}
        inputStyle={{ color: "black" }}
        placeholder="Search Stock Tickers (ex. MSFT)"
        onChangeText={text => updateSearch(text)}
        value={search}
      />
      <ScrollView keyboardShouldPersistTaps="always">
        {searchResults &&
          searchResults.map((item, i) => (
            <ListItem
              key={i}
              title={item["1. symbol"]}
              subtitle={item["2. name"]}
              bottomDivider
              chevron
              onPress={() =>
                props.navigation.navigate("StockDetails", {
                  details: item
                })
              }
            />
          ))}
      </ScrollView>
    </View>
  );
}
