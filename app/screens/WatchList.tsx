import React, { useState } from "react";
import { View } from "react-native";
import { SearchBar, ListItem } from "react-native-elements";

const bestMatches = [
  {
    "1. symbol": "BA",
    "2. name": "The Boeing Company",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-05",
    "8. currency": "USD",
    "9. matchScore": "1.0000"
  },
  {
    "1. symbol": "BABA",
    "2. name": "Alibaba Group Holding Limited",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-05",
    "8. currency": "USD",
    "9. matchScore": "0.8000"
  },
  {
    "1. symbol": "BSVN",
    "2. name": "Bank7 Corp.",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-05",
    "8. currency": "USD",
    "9. matchScore": "0.8000"
  },
  {
    "1. symbol": "BHC",
    "2. name": "Bausch Health Companies Inc.",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-05",
    "8. currency": "USD",
    "9. matchScore": "0.6667"
  },
  {
    "1. symbol": "BAC",
    "2. name": "Bank of America Corporation",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-05",
    "8. currency": "USD",
    "9. matchScore": "0.4000"
  },
  {
    "1. symbol": "BIDU",
    "2. name": "Baidu Inc.",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-05",
    "8. currency": "USD",
    "9. matchScore": "0.3333"
  },
  {
    "1. symbol": "BLDP",
    "2. name": "Ballard Power Systems Inc.",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-05",
    "8. currency": "USD",
    "9. matchScore": "0.3333"
  },
  {
    "1. symbol": "BAX",
    "2. name": "Baxter International Inc.",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-05",
    "8. currency": "USD",
    "9. matchScore": "0.3333"
  },
  {
    "1. symbol": "GOLD",
    "2. name": "Barrick Gold Corporation",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-05",
    "8. currency": "USD",
    "9. matchScore": "0.1538"
  }
];

export default function Watchlist() {
  const [search, setSearch] = useState("");

  const updateSearch = function(text: string) {
    text = text.toUpperCase();
    setSearch(text);
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        lightTheme
        clearIcon
        round
        inputStyle={{ color: "black" }}
        placeholder="Search Stock Tickers (ex. MSFT)"
        onChangeText={text => updateSearch(text)}
        value={search}
      />
    </View>
  );
}
