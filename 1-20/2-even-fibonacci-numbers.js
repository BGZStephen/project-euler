// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
const chalk = require('chalk');
const log = console.log;

if (process.argv[2] == 'pretty') {
  pretty();
} else {
  clean();
}

function pretty() {
  console.time('Completion time')
  let a = 0
  let b = 1
  let sumOutput = 0;
  log(`Starting point: ${chalk.green(a)}`)
  for(a = a + b; b <= 4000000; a += b) {
    if(a % 2 == 0) {
      log(`---------------`)
      log(`Even fibonacci value: ${chalk.blue(a)}`)
      log(`New value following addition: ${chalk.green(sumOutput + a)}`)
      log(`---------------`)
      sumOutput += a;
    } else if (b % 2 == 0) {
      log(`---------------`)
      log(`Even fibonacci value: ${chalk.blue(b)}`)
      log(`New value following addition: ${chalk.green(sumOutput + b)}`)
      log(`---------------`)
      sumOutput += b;
    }
    b = a + b
  }
  log(`---------------`)
  log(`Sum Output: ${chalk.green(sumOutput)}`)
  log(`---------------`)
  console.timeEnd('Completion time')
}

function clean() {
  console.time('Completion time')
  let a = 0
  let b = 1
  let c = a + b;
  let sumOutput = 0;
  while(c <= 4000000) {
    if(c % 2 == 0) {
      sumOutput += c;
    }

    let newA = b;
    let newB = a + b;
    a = newA;
    b = newB;
    c = newA + newB;
  }
  log(sumOutput)
  console.timeEnd('Completion time')
}
