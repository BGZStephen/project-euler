// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const log = console.log;

function clean() {
  console.time('Completion time')
  let smallestMultiple;
  for(let i = 1; i >= 1; i++) {
    remainderOccurance = 0
    for(let j = 1; j <= 20; j++) {
      if(i % j !== 0) {
        remainderOccurance ++;
      }
    }
    if(remainderOccurance === 0) {
      smallestMultiple = i;
      break;
    }
  }
  log(smallestMultiple);
  console.timeEnd('Completion time')
}

clean();
