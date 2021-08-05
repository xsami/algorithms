function getFizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
    }
    else if (number % 3 === 0) { return 'Fizz'; }
    else if (number % 5 === 0) { return 'Buzz'; }
    return number;
}

function printFizzBuzzUntil(limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(getFizzBuzz(i));
    }
}

printFizzBuzzUntil(100);
