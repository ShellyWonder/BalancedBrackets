document.addEventListener("DOMContentLoaded", () => {
  updateCopyrightYear();
  document
    .getElementById("btnSubmit")
    .addEventListener("click", handleButtonClick);
    document.getElementById("btnInput").addEventListener("click", () => {
      const inputField = document.querySelector('input[placeholder="Input to check for balanced brackets"]');
      const userBracket = inputField.value;
      checkBrackets(userBracket);
      inputField.value = ''; // Clear the input field
    });
    
    document.querySelector('input[placeholder="Input to check for balanced brackets"]').addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission if inside a form
        const inputField = document.querySelector('input[placeholder="Input to check for balanced brackets"]');
        const userBracket = inputField.value;
        checkBrackets(userBracket);
        inputField.value = ''; // Clear the input field
      }
    });
});
//**Demo Data Set ** */
const testBrackets = "[()]{}{[()()]()}";

// Function to handle button click event
function handleButtonClick() {
  // Hide the button
  document.getElementById("btnSubmit").style.display = "none";

  // Find the parent <td> and insert the checkmark icon
  const checkmarkTd = document.querySelector("#btnSubmit").closest("td");
  checkmarkTd.innerHTML = '<i class="bi bi-check-circle-fill checkMark"></i>';

  // Optional: Call the checkBrackets function to perform any additional logic
  checkBrackets();
}

//driver function used for display and passing values.
function checkBrackets(brackets) {
  const isBalancedResult = isBalanced(brackets);

  // Create a new row in the table
  const tableBody = document.querySelector("table.examples tbody");
  const newRow = document.createElement("tr");

  // Create the first cell with the user input
  const inputCell = document.createElement("td");
  inputCell.textContent = brackets;
  newRow.appendChild(inputCell);

  // Create the second cell with the result icon
  const resultCell = document.createElement("td");
  const resultIcon = document.createElement("i");
  resultIcon.className = isBalancedResult
    ? "bi bi-check-circle-fill checkMark"
    : "bi bi-x-octagon-fill xMark";
  resultCell.appendChild(resultIcon);
  newRow.appendChild(resultCell);

  // Append the new row to the table
  tableBody.appendChild(newRow);

//   // Update resultsB display (optional, for consistency)
//   const resultsB = document.getElementById("resultsB");
//   const msgB = isBalancedResult
//     ? `Brackets are balanced ==> ${brackets}`
//     : `Brackets are NOT balanced ==> ${brackets}`;
//   resultsB.innerHTML = msgB;
// }
}
function isBalanced(brackets) {
  let stack = [];
  let openBrackets = ["(", "{", "["];
  let balancedBrackets = {
    "(": ")",
    "{": "}",
    "[": "]",
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
