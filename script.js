// Slide next and prev buttons for the first slide
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
  // Get all items in the slide
  let items = document.querySelectorAll('.item');
  // Move the first item to the end of the slide
  document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function(){
  // Get all items in the slide
  let items = document.querySelectorAll('.item');
  // Move the last item to the beginning of the slide
  document.querySelector('.slide').prepend(items[items.length - 1]);
});

// Slide next and prev buttons for the second slide
let next1 = document.querySelector('.next1');
let prev1 = document.querySelector('.prev1');

next1.addEventListener('click', function(){
  // Get all items in the second slide
  let items1 = document.querySelectorAll('.item1');
  // Move the first item to the end of the second slide
  document.querySelector('.slide1').appendChild(items1[0]);
});

prev1.addEventListener('click', function(){
  // Get all items in the second slide
  let items1 = document.querySelectorAll('.item1');
  // Move the last item to the beginning of the second slide
  document.querySelector('.slide1').prepend(items1[items1.length - 1]);
});

// Input focus and blur functions
const inputs = document.querySelectorAll(".input");
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
      parent.classList.remove("focus")
  }
}

// Add focus and blur event listeners to all input elements
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
