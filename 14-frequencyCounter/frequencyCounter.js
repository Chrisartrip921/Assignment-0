function frequencyCounter(word) {
  // Insert code here;
  let map = {};
  for(let i = 0; i < word.length; i++) {
    if(word[i] in map) {
      map[word[i]]++;
    } else {
      map[word[i]] = 1;
    }
  }
  console.log(map);
}

// Do not edit this line;
module.exports = frequencyCounter;