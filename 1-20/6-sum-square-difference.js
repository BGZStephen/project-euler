// The sum of the squares of the first ten natural numbers is 385
// The square of the sum of the first ten natural numbers is 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const log = console.log;

function clean() {
  console.time('Completion time')
  let sumSquare = 0;
  let squareSumArray = []
  for(let i = 1; i <= 100; i++) {
    sumSquare += (i * i);
  }
  for(let i = 1; i <= 100; i++) {
    squareSumArray.push(i);
  }
  const squareSumTotal = squareSumArray.reduce(function(a, b) {
    return a + b;
  })

  log((squareSumTotal * squareSumTotal) - sumSquare)
  console.timeEnd('Completion time')
}

clean();
