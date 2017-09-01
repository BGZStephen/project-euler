// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

const log = console.log;

const primesArray = []

async function clean() {
  console.time('Completion time')
  let primeSum = 0
  for(let i = 2; i < 2000000; i++) {
    if(primesArray.length < 10) {
      if(testPrime(i)) {
        primeSum += i;
        primesArray.push(i)
      }
    } else if(primesArray.length >= 10) {
      if(testPrimeAgainstArray(i)) {
        primesArray.push(i)
        primeSum += i;
      }
    }
  }
  log(primeSum)
  console.timeEnd('Completion time');
}

function testPrime(i) {
  let j = 2;
  let divisors = 0
  for(j; j < i; j++) {
    if (i % j == 0) {
      return false
    }
  }
  return i;
}

function testPrimeAgainstArray(i) {
  for(let j = 1; j <= primesArray.length; j++) {
    if (i % primesArray[j] == 0) {
      return false
    }
  }
  return i;
}

clean();