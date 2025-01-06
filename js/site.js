document.addEventListener("DOMContentLoaded", () => {
  updateCopyrightYear();
  document.getElementById("btnSubmit")
        .addEventListener("click", checkBrackets);
  document.getElementById("btnInput")
        .addEventListener("click", checkBrackets);
});
//**Demo Data Set ** */
const testBrackets = "[()]{}{[()()]()}";

//driver function used for display and passing values.
function checkBrackets() {
  //bracket value from #inputBtn
  let userBracket = document.querySelector('input[type="text"]').value;

  //implement isBalanced Function--Checks if bracket string is balanced.
  let resultsA = isBalanced(testBrackets);
  let resultsB = isBalanced(userBracket);
 
  // Used for display 
  let msgA = resultsA ? `Brackets are balanced ==> ${testBrackets}` : `Brackets are NOT balanced ==> ${testBrackets}`;
  let msgB = resultsB ? `Brackets are balanced ==> ${userBracket}` : `Brackets are NOT balanced ==> ${userBracket}`;
  
  // Display the message
  document.getElementById("resultsA").innerHTML = msgA;
  document.getElementById("resultsB").innerHTML = msgB;
}

function isBalanced(brackets) {
  let stack = [];
  let openBrackets = ["(", "{", "["];
  let balancedBrackets = {
      "(": ")",
      "{": "}",
      "[": "]"
  };

  for (let index = 0; index < brackets.length; index++) {
      let item = brackets[index];
      if (openBrackets.includes(item)) {
          stack.push(item);
      } else if (stack.length === 0 || balancedBrackets[stack.pop()] !== item) {
          return false;
      }
  }
  // Final check: return true if the stack is empty, meaning all brackets were balanced
  return stack.length === 0;
}

function updateCopyrightYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById("copyrightYear").textContent = currentYear;
}