// NOTE: Probably a bad idea to use Numbers since it's not totally accurate

const SOLANA_TOKEN_ADDRESS = `So11111111111111111111111111111111111111112`;

/**
 * Solana Price API
 * Fetch the current price of Solana in USD
 * @returns {object}  priceObject
 * @returns {number}  priceObject.price
 */
export async function GET () {
  const priceResponse = await fetch(`https://api.raydium.io/v2/main/price`);
  const priceData = (await priceResponse.json())

  return {
    price: Number(priceData[SOLANA_TOKEN_ADDRESS])
  };
};
