const axios = require('axios')

const getExchangeRates = async url => {
  const result = await axios.get(url)

  return result.data
}

module.exports = { getExchangeRates }
