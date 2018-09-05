/*
The Sieve of Eratosthenes is an algorithm used to generate all prime numbers smaller than N. The method is to take increasingly larger prime numbers, and mark their multiples as composite.

For example, to find all primes less than 100, we would first mark [4, 6, 8, ...] (multiples of two), then [6, 9, 12, ...] (multiples of three), and so on. Once we have done this for all primes less than N, the unmarked numbers that remain will be prime.

Implement this algorithm.
*/

function primeSieve(n) {
    let primeList = [1];
    let nonPrimes = [];
    
    for (let i = 2; i < n; i ++) {
        // If number is not listed as a non-prime already we can assume that means it is a prime
        if ( !(nonPrimes.includes(i)) ) {
            let product = i;
            primeList.push(i);

            // This runs the loop where we multiply our current prime by it's multiples, until the product is > n
            for (let j = 2; product < n; j++) {
                product = i * j;

                // Checks if already listed as a non Prime number. If not adds to the list
                if ( !(nonPrimes.includes(product)) ) {
                    nonPrimes.push(product);
                }
            }
        }
    }
    console.log(`
    Prime List: ${primeList}
    Non Primes: ${nonPrimes}
    `);
}

primeSieve(100);