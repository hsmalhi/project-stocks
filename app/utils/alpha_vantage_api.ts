import env from "../../.env.json";

const API_KEY = env.ALPHA_VANTAGE_API_KEY;

const API_LIMIT_HIT = { Error: "API limit reached!" };

async function searchTickers(search: string) {
  try {
    let response = await fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=${API_KEY}`
    );
    let responseJson = await response.json();
    if (responseJson.bestMatches) {
      return responseJson.bestMatches;
    } else if (responseJson.Note) {
      console.log(API_LIMIT_HIT.Error);
    }
  } catch (error) {
    console.error(error);
  }
}

async function getIntradaySeries(ticker: string, minutes: number) {
  try {
    let response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=${minutes}min&apikey=${API_KEY}`
    );
    let responseJson = await response.json();
    if (responseJson[`Time Series (${minutes}min)`]) {
      return responseJson;
    } else if (responseJson.Note) {
      console.log(API_LIMIT_HIT.Error);
    }
  } catch (error) {
    console.error(error);
  }
}

export default {
  searchTickers,
  getIntradaySeries
};
