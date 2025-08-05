// Reference to the UL element
const list = document.getElementById("myUL");

// Handle task check (strike-through) on click
list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});

// Function to add a new task
function newElement() {
  const input = document.getElementById("myInput");
  const inputValue = input.value.trim();

  if (inputValue === "") {
    alert("You must write something!");
    return;
  }

  // Create new list item
  const li = document.createElement("li");
  li.textContent = inputValue;

  // Create delete button
  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "×";
  deleteBtn.className = "close";

  // Add delete functionality
  deleteBtn.onclick = function () {
    li.remove();
  };

  // Append delete button and add item to list
  li.appendChild(deleteBtn);
  list.appendChild(li);

  // Clear input
  input.value = "";
}
