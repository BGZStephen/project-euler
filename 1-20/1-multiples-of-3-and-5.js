// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
const chalk = require('chalk');
const log = console.log;

if (process.argv[2] == 'pretty') {
  pretty();
} else {
  clean();
}

function pretty() {
  console.time('Completion time')
  let sumValue = 0
  for(let i = 0; i < 1000; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
      log(`| Original value: ${sumValue}`, chalk.blue(`| Value to add: ${i}`), chalk.green(`| Iteration value: ${sumValue + i} |`))
      log('----------')
      sumValue += i;
    }
  }
  log(`-----------------------`)
  log(`| Final value: ${sumValue} |`)
  log(`-----------------------`)
  console.timeEnd('Completion time')
}

function clean() {
  console.time('Completion time')
  let sumValue = 0
  for(let i = 0; i < 1000; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
      sumValue += i;
    }
  }
  log(sumValue)
  console.timeEnd('Completion time')
}
