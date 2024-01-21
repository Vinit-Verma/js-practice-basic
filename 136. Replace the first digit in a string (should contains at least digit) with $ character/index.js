console.log("Console from js file");
let str = "abc1 dabc";

function replaceFirstStringWith$(str) {
  console.log("Input string is -", str);
  return str.replace(/[0-9]/, $);
}

console.log("Result for str ", replaceFirstStringWith$("abc1def"));
