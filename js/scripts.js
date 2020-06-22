const form = document.querySelector("#registrar");
const input = form.querySelector("input");
const ul = document.getElementById("invitedList");

function createLI(text) {
  var li = document.createElement("li");
  li.innerText = text;
  let label = document.createElement("label");
  label.textContent = "Confirmed";
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  label.appendChild(checkbox);
  li.appendChild(label);
  let button = document.createElement("button");
  button.textContent = "Remove";
  li.appendChild(button);
  return li;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value;
  const li = createLI(text);
  // prepend wil put it to the top rather than to the bottom
  ul.prepend(li);
  input.value = "";
});

ul.addEventListener("change", (e) => {
  const checkbox = e.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;

  if (checked) {
    listItem.className = "responded";
  } else {
    listItem.className = "";
  }
});

ul.addEventListener("click", (e) => {
  if ((e.target.tagName = "BUTTON")) {
    e.target.parentNode.remove();
  }
});
