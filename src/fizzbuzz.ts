const fizzbuzz = (input: number): string => {
  if (input % 3 == 0 && input % 5 == 0) {
    return 'FizzBuzz'
  } else if (input % 3 == 0) {
    return 'Fizz'
  } else if (input % 5 == 0) {
    return 'Buzz'
  } else {
    return String(input)
  }
}

module.exports = fizzbuzz
