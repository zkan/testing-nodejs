const fizzbuzz = require('../fizzbuzz')

test('take input 3 then get Fizz', () => {
  results = fizzbuzz(3)
  expect(results).toBe('Fizz')
})
