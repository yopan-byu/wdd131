const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener("click", () => {
  if (input.value !== "") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
  }
  input.focus();
});

function displayList(item) {
  const li = document.createElement("li");
  li.textContent = item;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", () => {
    deleteChapter(item + "❌");
    list.removeChild(li);
    input.focus();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);
}

function setChapterList() {
  localStorage.setItem("chapters", JSON.stringify(chaptersArray));
}

function getChapterList() {
  const stored = localStorage.getItem("chapters");
  if (stored) {
    return JSON.parse(stored);
  }
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 2);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}
