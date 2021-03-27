var fizzbuzz = function (input) {
    if (input % 3 == 0) {
        return 'Fizz';
    }
    else if (input % 5 == 0) {
        return 'Buzz';
    }
};
module.exports = fizzbuzz;
