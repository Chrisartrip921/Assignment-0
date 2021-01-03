class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    let startNum = 0 
    let endNum = nums.length - 1;

    while (start <= end) {

      let midNum = Math.floor((startNum + endNum) / 2);

      if (nums[midNum] === target) {
        return true;
      }
      else if (nums[midNum] < target) {
        startNum = midNum + 1;
      }
      else {
        endNum = midNum - 1;
      }
    }

    return false;

  }

}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;