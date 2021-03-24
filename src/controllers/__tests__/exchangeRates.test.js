const { getExchangeRates } = require('../exchangeRates')

const url = 'https://api.exchangeratesapi.io/latest?base=USD&symbols=THB'

describe('Test Exchange Rates', () => {
  it('should return exchange rates', async () => {
    const result = await getExchangeRates(url)

    expect(result.rates.THB).toBe(30.9845998485)
    expect(result.base).toBe('USD')
    expect(result.date).toBe('2021-03-23')
  })
})
