import env from '../../.env.json';

const API_KEY = env.ALPHA_VANTAGE_API_KEY;

const API_LIMIT_MSG = "Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency. Thank you!";

async function searchTickers(search: string) {
  try {
    let response = await fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=${API_KEY}`,
    );
    let responseJson = await response.json();
    if (responseJson.bestMatches) {
      return responseJson.bestMatches;
    }
    else if(responseJson.Note === API_LIMIT_MSG) {
      console.log("API limit reached!");
    };
  } catch (error) {
    console.error(error);
  }
}

async function getIntradaySeries(ticker: string, minutes: number) {
  try {
    let response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=${minutes}min&apikey=${API_KEY}`,
    );
    let responseJson = await response.json();
    // stopped HERE.!
    if (responseJson.bestMatches) {
      return responseJson.bestMatches;
    }
    else if(responseJson.Note === API_LIMIT_MSG) {
      console.log("API limit reached!");
    };
  } catch (error) {
    console.error(error);
  }
}

export default {
  searchTickers
}