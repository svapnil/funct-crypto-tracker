/**
 * Sample welcome API
 * We can provide types to our APIs to enforce type-safety
 *   at the HTTP request (@param) and response (@returns) layer
 * @returns {object}  priceObject
 * @returns {number}  priceObject.price
 */
export async function GET () {

  return {
    price: 123
  };
};

/**
 * POST
 */
export async function POST (context) {

  return `HTTP POST!`;

}

/**
 * PUT
 */
export async function PUT (context) {

  return `HTTP PUT!`;

};

/**
 * DELETE
 */
export async function DELETE (context) {

  return `HTTP DELETE!`;

};
