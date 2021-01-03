function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let union = new Set();

  for(let currArg of args) {
    for(let nums of currArg) {
      union.add(nums);
    }
  }
  return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;