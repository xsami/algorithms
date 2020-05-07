/**
 * TODO: given a numer n, creates a funciton that return as string as a factor of prime numbers
 * example:
 * primeDecomposition(10) -> 2 * 5
 * primeDecomposition(20) -> 2 * 2 * 5
 */

const primes = [];

function sieve() {
    primes[0] = 0;
    primes[1] = 0;
    for (let i = 2; i <= 1000000; i++) {
            if (primes[i] === undefined) {
                primes[i] = 1;
                for(let j = i * i; j <= 1000000; j+=i) {
                    primes[j] = 0;
                }
            }
    }
}

function primeDecomposition(n, i = 2, result = []) {

    while (n > 0 && i <= n) {
        if (primes[i] && n % i === 0) {
            result.push(i);
            n = n / i;
        } else {
            i++;
        }
    }
    const mapRes = [];
    result.forEach(e => {
        if (mapRes[e] === undefined) {
            mapRes[e] = 1;
        } else {
            mapRes[e]++;
        }
    });
    const group = Object.keys(mapRes).map((k) => mapRes[k] > 1 ? `${k} ^ ${mapRes[k]}` : `${k}` );
    const output = result.length > group.length ? `${result.join(' * ')} (${group.join(' * ')})` : result.join(' * ')
    
    return output;
}

sieve();

console.log( primeDecomposition(19))  // 19
console.log( primeDecomposition(10))  // 2 * 5
console.log( primeDecomposition(70560))  // 2 * 2 * 2 * 2 * 2 * 3 * 3 * 5 * 7 * 7 (2^5 * 3^2 * 5 * 7^2)
console.log( primeDecomposition(143848))  // 2 * 2 * 2 * 17981 (2^3 * 17981)
console.log( primeDecomposition(701711))  // 701711
console.log( primeDecomposition(999999))  // 3 * 3 * 3 * 7 * 11 * 13 * 37 (3^3 * 7 * 11 * 13 * 37)