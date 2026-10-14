const add_btn = document.querySelector(".btn");
const input_field = document.querySelector(".input-field");
const todo_list = document.querySelector(".scroll");
let task_count = 0;
const counter = document.querySelector("#todoCount")
const tasks = []
const deletebtn = document.querySelector('#deleteButton')

console.log(counter)

input_field.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        add_btn.click();
    }
});

add_btn.addEventListener('click', () => {
    const task = input_field.value.trim()
    if(!task) return ;

    const task_element = document.createElement('li');
    task_element.id = "todoList"

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';

    const task_span = document.createElement('span')
    task_span.innerText = task

    const paragraph = document.createElement('p')
    paragraph.append(checkbox, task_span)

    task_element.append(paragraph)
    todo_list.appendChild(task_element);

    task_count++;
    counter.innerText = task_count.toString()

    input_field.value = ''

    // Class list adds a specific class to an element
    // and the second argument adds condition, if true it adds the class, else it removes the class
    checkbox.addEventListener('change', () => {
        task_span.classList.toggle('disabled', checkbox.checked)
    });
})

deletebtn.addEventListener('click', () => {
    task_count = 0;
    todo_list.innerHTML = ""
    counter.innerText = task_count.toString()
})






