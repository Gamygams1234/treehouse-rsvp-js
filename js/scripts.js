const form = document.querySelector("#registrar");
const input = form.querySelector("input");
const ul = document.getElementById("invitedList");

function createLI(text) {
  var li = document.createElement("li");
  let span = document.createElement("span");
  span.textContent = text;
  li.append(span);
  let label = document.createElement("label");
  label.textContent = "Confirmed";
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  label.appendChild(checkbox);
  li.appendChild(label);
  let editButton = document.createElement("button");
  editButton.textContent = "Edit";
  li.appendChild(editButton);
  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  li.appendChild(removeButton);
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
    const button = e.target;
    const li = button.parentNode;
    if (button.textContent === "Remove") {
      button.parentNode.remove();
    } else if (button.textContent === "Edit") {
      const span = li.firstElementChild;
      const textInput = document.createElement("input");
      textInput.type = "text";
      textInput.value = span.textContent;
      li.insertBefore(textInput, span);
      li.removeChild(span);
      button.textContent = "Save";
    } else if (button.textContent === "Save") {
      const textInput = li.firstElementChild;
      const span = document.createElement("span");
      span.textContent = textInput.value;
      li.insertBefore(span, textInput);
      li.removeChild(textInput);
      button.textContent = "Edit";
    }
  }
});
