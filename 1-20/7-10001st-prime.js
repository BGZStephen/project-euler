// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

const log = console.log;

function clean() {
  console.time('Completion time')
  let knownPrimes = 0;
  let thenThousandAndFirstPrime;
  for(let i = 2; knownPrimes < 10001; i++) {
    const numberChecked = isPrime(i)
    if (numberChecked) {
      knownPrimes += 1
      thenThousandAndFirstPrime = i;
    }
  }
  log(thenThousandAndFirstPrime)
  console.timeEnd('Completion time');
}


function isPrime(i) {
  let j = 1;
  let divisors = 0
  for(j; j <= i; j++) {
    if (i % j == 0) {
      divisors ++
    }
    if ( divisors > 2 ){
      return false;
    }
  }
  return i;
}

clean();
