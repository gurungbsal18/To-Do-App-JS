const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".task-list");

const submitBtn = () => {
    if(taskInput.value === "") return;
  const taskValue = taskInput.value;

  const listItem = document.createElement("li");
  listItem.classList.add('list-item');
  listItem.classList.add('border-bottom');

  const taskContent = document.createElement("p");
  taskContent.textContent = taskValue;

  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";

  taskCheckbox.addEventListener("click", () => {
    if(taskCheckbox.checked) {
        taskContent.style.textDecoration = "line-through";
        alert('Task Completed')
    } else {
        taskContent.style.textDecoration = "none";
    }
  });

  taskCheckbox.addEventListener("click", () => {
    if (taskCheckbox.checked) {
        // Apply style when checkbox is checked
        taskContent.style.textDecoration = "line-through";
    } else {
        // Remove style when checkbox is unchecked
        taskContent.style.textDecoration = "none";
    }
});

  const deleteBtn = document.createElement("button");

  const deleteBtnIcon = document.createElement('lord-icon');
  deleteBtnIcon.setAttribute("src", "https://cdn.lordicon.com/drxwpfop.json");
  deleteBtnIcon.setAttribute("trigger", "hover");
  deleteBtnIcon.setAttribute("style", "width: 20px; height: 20px");

  deleteBtn.appendChild(deleteBtnIcon);

//   deleteBtn.textContent = "Delete Task";
  deleteBtn.style.background = "#f1f1f1";
  deleteBtn.style.borderRadius = "50%";
  deleteBtn.style.display = "flex";
  deleteBtn.style.justifyContent = "center";
  deleteBtn.style.alignItems = "center";
  deleteBtn.style.width = "30px";
  deleteBtn.style.height = "30px";
  deleteBtn.style.border = "none";

  deleteBtn.addEventListener("click", () => {
    listItem.remove();
    alert('Are you sure you want to delete task?');
  });

  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task-container');

  taskContainer.appendChild(taskCheckbox);
  taskContainer.appendChild(taskContent);

  listItem.appendChild(taskContainer);
  listItem.appendChild(deleteBtn);

  taskList.appendChild(listItem);

  taskInput.value = "";
};

taskInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        submitBtn();
    }
})
