// Selecting elemnts
const add_btn = document.querySelector(".btn");
const input_field = document.querySelector(".input-field");
const todo_list = document.querySelector(".scroll");
const counter = document.querySelector("#todoCount");
const deletebtn = document.querySelector("#deleteButton");

// {text: "Task", completed: bool}
let tasks = [];
fetchTasks();

function addtask(task) {
    console.log('add task function called')
    tasks.push({
        text: task,
        completed: false
    });
    console.log(tasks);
    localSaveTasks();
    display();
}

function deleteAllTasks() {
    console.log('delete all tasks function called')
    tasks.length = 0;
    localSaveTasks();
    display();
}

function display() {
    console.log('display function called')
    todo_list.innerHTML = "";

    for(const task of tasks) {
        const task_element = document.createElement("li");
        task_element.id = "todoList";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        const task_span = document.createElement("span");
        task_span.innerText = task.text;
        task_span.classList.toggle("disabled", task.completed); // For persisting the strike through

        const paragraph = document.createElement("p");
        paragraph.append(checkbox, task_span);

        task_element.append(paragraph);
        todo_list.appendChild(task_element);

        // Class list adds a specific class to an element
        // and the second argument adds condition, if true it adds the class, else it removes the class
        checkbox.addEventListener("change", () => {
            // checkbox.checked directly returns a boolean
            // so we need to update the main object with it
            // Then use the main objects boolen as toggle
            task.completed = checkbox.checked
            task_span.classList.toggle("disabled", task.completed);
            localSaveTasks(); // To save the checkbox state
        });
    }

    // Update the counter
    counter.textContent = tasks.length;
    input_field.value = "";
}

function localSaveTasks() {
    console.log("LST called")
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function fetchTasks() {
    const fetchedTasks = localStorage.getItem("tasks");
    if(fetchedTasks == null) {
        console.log("Did not find any persistent tasks");
    }
    else {
        tasks = JSON.parse(fetchedTasks);
        console.log(fetchedTasks)
    }

    display();
}
input_field.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        add_btn.click();
    }
});

add_btn.addEventListener("click", () => {
    const task = input_field.value.trim();
    if (!task) return;
    addtask(task);
});

deletebtn.addEventListener("click", () => {
    deleteAllTasks();
});
