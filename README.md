![alt text](balancedBracketsImg.png)
# Balanced Brackets Checker
This project is a web-based application that allows users to check if a given string of brackets (`{}`, `()`, `[]`) is balanced. The application is built using HTML, CSS, and JavaScript, and it provides a simple interface for user interaction.

## Features
- **Bracket Balance Check**: Users can input a string containing brackets, and the application will check if the brackets are balanced.
- **Input Validation**: The application filters out any characters that are not brackets (`{}`, `()`, `[]`) before performing the balance check.
- **Keyboard and Button Support**: Users can trigger the balance check by clicking a button or pressing the "Enter" key.
- **User Feedback**: The application displays the result of the balance check in a table format, showing the input and whether it is balanced.

## Files

### `index.html`
Contains the structure of the web application. Key elements include:
- An input field for users to enter their bracket string.
- A button labeled "Try it!" for triggering the balance check.
- A table to display the results of the balance checks.

### `style.css`
Defines the styling for the web application, including layout and design elements for the input field, button, and result table.

### `site.js`
Handles the functionality of the application. Key functions include:
- **`handleInput()`**: Captures user input, filters out non-bracket characters, and calls `checkBrackets()`.
- **`checkBrackets(brackets)`**: Checks if the input string of brackets is balanced.
- **`isBalanced(brackets)`**: Core logic to determine if a string of brackets is balanced.
- **Event Listeners**: Handles button clicks and "Enter" key presses to trigger the balance check.

### `updateCopyrightYear()`
Dynamically updates the copyright year in the footer of the application.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/balanced-brackets-checker.git

   2. Open index.html in a web browser to use the application.
Usage
Enter a string containing brackets ({}, (), []) in the input field.
Click the "Try it!" button or press the "Enter" key.
The application will display the result in the table, indicating if the brackets are balanced.
Example
Input: {[()()]}
Output: ✅ Balanced

Input: {[(])}
Output: ❌ Not Balanced

Contributing
Feel free to fork the project, make improvements, and submit pull requests. Contributions are welcome!

License
This project is licensed under the MIT License. See the LICENSE file for more details.
