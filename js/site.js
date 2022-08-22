//CONTROLLER 
function getValues() {

}
//PROGRAM ENTRY POINTS
function getValues2() {
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  //VALIDATION
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  //check to see if input is integer
  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    //generate list of numbers
    let numbers = generateNumbers(startValue, endValue);
    displayNumbers(numbers);
  } else {
    Swal.fire({
      icon: "error",
      title: "oops",
      text: "only integers are allowed for JS Speedway"
    })
  }
}

function generateNumbers(start, end) {
  let numbers = [];
  for (let index = start; index <= end; index++) {
    numbers.push(index);
  }
  return numbers;
}

function displayNumbers(numbers) {

  let templateRows = "";
  let className = "even";
  for (let index = 0; index < numbers.length; index++) {

    let number = numbers[index];

    if (number % 2 === 0) {
      className = "even";

    } else {
      className = "odd";
    }
    let row = `<tr><td class="${className}">${number}</td></tr>`;
    templateRows += row;
  }
  document.getElementById("results").innerHTML = templateRows;
}