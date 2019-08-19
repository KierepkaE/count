const button = document.getElementById("increment");
const display = document.getElementById("display");
let counter = 0;

function add() {
  counter++;
  display.textContent = counter;
}

button.addEventListener("click", add);
