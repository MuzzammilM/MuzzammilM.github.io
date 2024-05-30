// Select all elements with the class "input" and store them in the "inputs" variable
const inputs = document.querySelectorAll(".input");

// Function to add focus class when an input is focused
function focusFunc() {
  let parent = this.parentNode; // Get the parent element of the input
  parent.classList.add("focus"); // Add the "focus" class to the parent element
}

// Function to remove focus class when an input loses focus and its value is empty
function blurFunc() {
  let parent = this.parentNode; // Get the parent element of the input
  if (this.value == "") { // Check if the input value is empty
      parent.classList.remove("focus"); // Remove the "focus" class from the parent element if input value is empty
  }
}

// Loop through each input element
inputs.forEach((input) => {
  // Add event listener for focus event on each input, call focusFunc when focused
  input.addEventListener("focus", focusFunc);
  // Add event listener for blur event on each input, call blurFunc when blurred
  input.addEventListener("blur", blurFunc);
});
