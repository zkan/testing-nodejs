const fizzbuzz = require('../fizzbuzz')

describe('FizzBuzz', () => {
  test('take input 3 then get Fizz', () => {
    results = fizzbuzz(3)
    expect(results).toBe('Fizz')
  })

  test('take input 6 then get Fizz', () => {
    results = fizzbuzz(6)
    expect(results).toBe('Fizz')
  })
})
