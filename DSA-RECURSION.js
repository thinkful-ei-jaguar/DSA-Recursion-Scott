//What is the input to the program?
// What is the output of the program?
// What is the input to each recursive call?
// What is the output of each recursive call?

// There must be a reachable base case where the function stops calling itself.
// The argument of the function must be modified with each call
// The function does not return the outcome until all recursive calls are finished
// A recursive call returns to the recursive function that called it

//#1 

const howMany = (sheep) => {
  if (sheep === 0) {
    return 'All sheep jumped';
  }
  console.log(sheep + ": Another sheep jumped")
  return howMany(sheep - 1);
}

let sheep = 3;
console.log(howMany(sheep));

//#2 

function powerCalc(number, exp) {
  if(exp < 0) { 
    return console.log('exponent should be >= 0');
  }
  if(exp === 0) {
    return 1;
  }
  return number * powerCalc(number, exp - 1);
}

console.log(powerCalc(10, 2))



//#3

function reverseString(str) {
  if(!str.length) { //if it's not the string length
    return ''; //return an empty string
  }
  //str[str.length - 1] will take away the last character from the string
  //str.slice(0, -1) will return the string w/o the last char
  return str[str.length - 1] + reverseString(str.slice(0, -1)); 
  
}
const newStr = reverseString('Scott')

console.log(newStr)

//#4

const triangleFunction = (n) => {
  if (n === 0) {
    return n;
  }
  
  return n + triangleFunction(n-1);
}

let n = 15;
console.log(triangleFunction(n)); // should return 10;

//#5

