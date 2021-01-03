function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  return args.reduce(function(accumulator, currentVal) {
    return accumulator * currentVal;    
 }, 1); //initialize accumulator to 1
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;