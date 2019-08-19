const button = document.getElementById("increment");
const display = document.getElementById("display");
let counter = 0;
display.textContent = counter;
function add() {
  counter++;
  display.textContent = counter;
}

button.addEventListener("click", add);
