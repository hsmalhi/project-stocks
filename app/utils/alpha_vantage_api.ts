async function searchTickers() {
  try {
    let response = await fetch(
      'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=demo',
    );
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export default {
  searchTickers
}