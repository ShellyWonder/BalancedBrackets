document.addEventListener("DOMContentLoaded", () => {
  updateCopyrightYear();
});

//balanced
const testbrackets1 = "[()]{}{[()()]()}";
//balanced
const testbrackets2 = `([{}])`;
//not balanced
const testbrackets3 = "{(})[]";
//not balanced
const testbrackets4 = "[(])";
//not balanced
const testbrackets5 = "[()";

//driver function used for display and passing values.
function checkBrackets() {
  //chng testBrackets here.
  let testBrackets = testbrackets1;
  //implement isBalanced Function--Checks if bracket string is balanced.
  let results = isBalancedB(testbrackets2);
  //used for display 
  let msg = " ";

  if (results ==true) {
    msg = `Brackets are balanced ==> ${testBrackets}`;
  } else {
     msg = `Brackets are NOT balanced ==> ${testBrackets}`;
  }
  //display the message
  document.getElementById("results").innerHTML = msg;
}
//takes an array of strings and returns the longest one.Two options:
//option A
function isBalanced(brackets) {
  //declare an array
  let stack = [];
  //loop over the string(s)

  for (let index = 0; index < brackets.length; index++) {
    
    let item = brackets[index];
//comparison operator
    if (item == '(' || item== '{' || item== '[') {
      stack.push(item);
      continue;
    } else if (item == ')' || item == '}' || item == ']') {
      
      if (stack.length == 0) {
        return false;
      }
      check = stack.pop();
      switch (item) {
        case ')':
          if (check != '(') {
            return false;
          }
          break;
        
        case '}':
          if (check != '{') {
            return false;
          }
          break;
        
        case ']':
          if (check != '[') {
            return false;
          }
          break;
      }
    }
    
  }
  return stack.length == 0;
}
//option B
function isBalancedB(brackets) {
  let stack = [];
  let openBrackets = ["(", "{", "["];
  let closeBrackets = [")", "}", "]"];
  let balancedBrackets = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  for (let index = 0; index < brackets.length; index++) {
    let item = brackets[index];
    if (openBrackets.includes(item)) {
      stack.push(item);
      continue;
    } else if (stack.length == 0) {
      return false;
    }
    check = stack.pop();
    if (balancedBrackets[check] != item) {
        
      return false;
    }

  }
    
  return stack.length == 0;
}
function updateCopyrightYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById("copyrightYear").textContent = currentYear;
}