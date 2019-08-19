const increment_button = document.getElementById("increment");
const decrement_button = document.getElementById("decrement");
const display = document.getElementById("display");
let counter = 0;
display.textContent = counter;

function add() {
  counter++;
  display.textContent = counter;
}
function minus() {
  counter--;
  display.textContent = counter;
}

increment_button.addEventListener("click", add);
decrement_button.addEventListener("click", minus);
