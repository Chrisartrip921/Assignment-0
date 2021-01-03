function titleCaseEdit(title) {
  // Insert code here;
  let fixedTitle = title.split("");
  for(let i = 0; i < fixedTitle.length; i++) {
    fixedTitle[i] = fixedTitle[i][0].toUpperCase() + fixedTitle[i].substr(1);
  }
  fixedTitle.join("");
  console.log(fixedTitle);
}

// Do not edit this line;
module.exports = titleCaseEdit;