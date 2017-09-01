// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

const log = console.log;

let primesArray = 0;

function clean() {
  console.time('Completion time')
  for(let i = 2; i < 2000000; i++) {
    const numberChecked = isPrime(i)
    if (numberChecked) {
      primesArray += i;
    }
  }
  log(primesArray)
  console.timeEnd('Completion time');
}

function isPrime(i) {
  let j = 2;
  let divisors = 0
  for(j; j <= Math.round(Math.sqrt(i)); j++) {
    if (i % j == 0) {
      return false;
    }
  }
  return i;
}

clean();
