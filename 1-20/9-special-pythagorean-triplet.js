// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which
// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.

const log = console.log;

const number = 1000

async function clean() {
  console.time('Completion time')
  for(let a = 1; a < 500; a++) {
    for(let b = 1; b < 500; b++) {
      for(let c = 1; c < 500; c++) {
        if((a < b < c) && (a * a) + (b * b) == (c * c) && (a + b + c) == 1000) {
          log(`a = ${a}, b = ${b}, c = ${c}`)
          log(`Sum: ${a + b + c}`)
          log(`Product: ${a * b * c}`)
          return
        }
      }
    }
  }
  console.timeEnd('Completion time');
}

clean();
