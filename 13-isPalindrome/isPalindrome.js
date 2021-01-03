function isPalindrome(word) {
  // Insert code here;

  //Create a reversed version of our word
  let wordReverse = word.split("").reverse().join("");
  //Make our reversed word all upper case to avoid case sensitivity
  wordReverse.toUpperCase();
  //Loop through
  for(let i = 0; i < word.length; i++) {
    //if('H' === 'H') etc... TRUE
    if(word[i] === wordReverse[i]){
      return true;
    } else {
      return false;
    }
  }
}

// Do not edit this line;
module.exports = isPalindrome;