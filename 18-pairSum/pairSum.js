function pairSum(nums, target) {
  // Insert code here;
  let val;
  for(let i = 0; i <= nums.length; i++) {
    for(let j = 0; j <= nums.length; j++) {
      if(nums[i] + nums[j] === target && i !== j) {
        val = true;
      } else if(val != true) {
        val = false;
      }
    }
  }
  return val;
}

// Do not edit this line;
module.exports = pairSum;