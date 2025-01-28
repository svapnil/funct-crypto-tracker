// NOTE: Probably a bad idea to use Numbers since it's not totally accurate

/**
 * Bitcoin Price API
 * Fetch the current price of Bitcoin in USD
 * @returns {object}  priceObject
 * @returns {number}  priceObject.price
 */
export async function GET (context) {

  const priceResponse = await fetch(`https://api.coinbase.com/v2/exchange-rates?currency=BTC`);
  const priceData = (await priceResponse.json())

  return {
    price: Number(priceData.data.rates.USD)
  };
};