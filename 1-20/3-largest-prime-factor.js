// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
const chalk = require('chalk');
const log = console.log;

const primeFactorsArray = []

if (process.argv[2] == 'pretty') {
  pretty();
} else {
  clean();
}

async function pretty() {
  console.time('Completion time')
  let largestPrimeFactor = 0;
  for(let i = 0; i < 600851475143; i++) {
    const primeToCheck = await isPrime(i)
    if (primeToCheck) {
      log(`---------------`)
      log(`${chalk.yellow(primeToCheck)} is a prime number`)
    }
    if(primeToCheck && 600851475143 % primeToCheck == 0) {
      largestPrimeFactor = primeToCheck
      log(`---------------`)
      log(`${chalk.blue(largestPrimeFactor)} is a factor of 600851475143`)
      primeFactorsArray.push(primeToCheck)
      let checker = primeFactorsArray.reduce(function(a, b) {
        return a * b
      })
      if(checker === 600851475143) {
        log(`---------------`)
        log(`Largest prime factor: ${chalk.green(largestPrimeFactor)}`)
        log(`---------------`)
        break;
      }
    }
  }
  console.timeEnd('Completion time')
}


async function clean() {
  console.time('Completion time')
  let largestPrimeFactor = 0;
  for(let i = 0; i < 600851475143; i++) {
    const primeToCheck = await isPrime(i)
    if(primeToCheck && 600851475143 % primeToCheck == 0) {
      largestPrimeFactor = primeToCheck
      primeFactorsArray.push(primeToCheck)
      let checker = primeFactorsArray.reduce(function(a, b) {
        return a * b
      })
      if(checker === 600851475143) {
        log(largestPrimeFactor)
        break;
      }
    }
  }
  console.timeEnd('Completion time')
}

function isPrime(i) {
  let j = 1;
  let divisors = 0
  for(j; j <= i; j++) {
    if (i % j == 0) {
      divisors ++
    }
    if ( divisors > 2 ){
      return;
    }
  }
  return i;
}
