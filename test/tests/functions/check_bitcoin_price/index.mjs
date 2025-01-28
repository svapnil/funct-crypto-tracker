const chai = await import('chai');
const expect = chai.expect;

export const name = `Endpoint tests: /check_bitcoin_price/`;
/**
 * Endpoint tests: /check_bitcoin_price/
 * @param {any} setupResult Result of the function passed to `.setup()` in `test/run.mjs`
 */
export default async function (setupResult) {

  it('Responds to HTTP GET', async () => {

    let result = await this.get('/check_bitcoin_price/', {});

    expect(result.json).to.exist;

  });

  it('Responds to HTTP POST', async () => {

    let result = await this.post('/check_bitcoin_price/', {});

    expect(result.json).to.exist;

  });

  it('Responds to HTTP PUT', async () => {

    let result = await this.put('/check_bitcoin_price/', {});

    expect(result.json).to.exist;

  });

  it('Responds to HTTP DELETE', async () => {

    let result = await this.del('/check_bitcoin_price/', {});

    expect(result.json).to.exist;

  });

};