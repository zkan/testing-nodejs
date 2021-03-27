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

  test('take input 5 then get Buzz', () => {
    results = fizzbuzz(5)
    expect(results).toBe('Buzz')
  })

  test('take input 10 then get Buzz', () => {
    results = fizzbuzz(10)
    expect(results).toBe('Buzz')
  })

  test('take input 15 then get FizzBuzz', () => {
    results = fizzbuzz(15)
    expect(results).toBe('FizzBuzz')
  })

  test('take input 30 then get FizzBuzz', () => {
    results = fizzbuzz(30)
    expect(results).toBe('FizzBuzz')
  })

  test('take input 1 then get 1', () => {
    results = fizzbuzz(1)
    expect(results).toBe('1')
  })

  test('take input 2 then get 2', () => {
    results = fizzbuzz(2)
    expect(results).toBe('2')
  })
})
