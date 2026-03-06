const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", addChapter);

function addChapter() {
  if (input.value.trim() === "") {
    input.focus();
    return;
  }

  const li = document.createElement("li");
  li.textContent = input.value;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  deleteButton.setAttribute("aria-label", `Remove ${input.value}`);

  deleteButton.addEventListener("click", function () {
    li.remove();
    input.focus();
  });

  li.append(deleteButton);

  list.append(li);

  input.value = "";
  input.focus();
}

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addChapter();
  }
});
