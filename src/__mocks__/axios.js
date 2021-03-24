const data = {
  rates: {
    THB: 30.9845998485
  },
  base: 'USD',
  date: '2021-03-23',
}

module.exports = {
  get: jest.fn(url => {
    if (url === 'https://api.exchangeratesapi.io/latest?base=USD&symbols=THB') {
      return Promise.resolve({
        data,
        status: 200
      })
    } else {
      throw new Error('Mock Error code 404')
    }
  })
}
