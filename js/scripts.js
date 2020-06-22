const form = document.querySelector("#registrar");
const input = form.querySelector("input");
const ul = document.getElementById("invitedList");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value;
  var li = document.createElement("li");
  li.innerText = text;
  ul.appendChild(li);
});
