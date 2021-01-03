function fizzBuzz(start, end) {
  // Insert code here;
  let newArr = [];
  for(let i = start; i <= end; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      newArr.push('FizzBuzz');
    } else if(i % 3 === 0) {
      newArr.push('Fizz');
    } else if(i % 5 === 0) {
      newArr.push('Buzz');
    } else {
      newArr.push(i);
    }
  }
  console.log(newArr);
}

// Do not edit this line;
module.exports = fizzBuzz;