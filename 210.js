// A Collatz sequence in mathematics can be defined as follows. Starting with any positive integer:

// if n is even, the next number in the sequence is n / 2
// if n is odd, the next number in the sequence is 3n + 1
// It is conjectured that every such sequence eventually reaches the number 1. Test this conjecture.

// Bonus: what input n <= 1000000 gives the longest sequence?

function collatz(num) {
    let sequence = [];
    while (num !== 1) {
        sequence.push(num);
        if ( num % 2 === 0) {
            num = num / 2;
        } else {
            num = (3 * num) + 1;
        }
    }
    return sequence;
}

function largestSequence(num) {
    let largest;
    let largestLength = 0;
    for (let i = 2; i <= num; i++) {
        let sequenceLength = collatz(i).length;
        if (sequenceLength > largestLength) {
            largest = i;
            largestLength = sequenceLength;
        }
    }
    console.log(`Number with largest sequence <= ${num}: ${largest}
Length of largest sequence: ${largestLength}`)
}