const inputBox = document.getElementById("taskInput");
const listContainer = document.getElementById("taskList");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something");
    } else {
        const li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "&times";
        li.appendChild(span);
    }
    inputBox.value = '';
    // saveData();
}

listContainer.addEventListener("click", function(e)) {
    if (e.target.tagName === "LI") {
        
    }
}