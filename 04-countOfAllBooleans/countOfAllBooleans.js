function countOfAllBooleans(arr) {
  // Insert code here;
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === true) {
      count++;
    } else if(arr[i] === false) {
      count++;
    } 
  }
  console.log(count);
}

// Do not edit this line;
module.exports = countOfAllBooleans;