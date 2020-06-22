const form = document.querySelector("#registrar");
const input = form.querySelector("input");
const ul = document.getElementById("invitedList");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value;
  var li = document.createElement("li");
  li.innerText = text;
  let label = document.createElement("label");
  label.textContent = "Confirmed";
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  ul.appendChild(li);
  label.appendChild(checkbox);
  li.appendChild(label);
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
