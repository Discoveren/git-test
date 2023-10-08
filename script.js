number = Number(prompt("Enter a number"));

function numberChecker() {
  if (number >= 10) {
    console.log(number);
    return true;
  } else {
    console.log(number);
    return false;
  }
}

let result = numberChecker();

console.log(result);
