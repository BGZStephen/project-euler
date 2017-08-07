// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const log = console.log;

function clean() {
  console.time('Completion time')
  let highestPalindrome = 0
  for(let i = 999; i > 0; i--) {
    for(let j = 999; j > 0; j--) {
      if((i * j).toString() === (i * j).toString().split('').reverse().join('') && (i * j) > highestPalindrome) {
        highestPalindrome = i * j;
      }
    }
  }
  log(highestPalindrome);
  console.timeEnd('Completion time')
}

clean();
