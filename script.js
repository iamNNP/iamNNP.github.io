let tasks = [];

let addTask = document.getElementById("task").addEventListener("keydown", function(e) {
    if (e.code == "Enter") {
        let task = e.target.value;
        if (!tasks.includes(task)) {
            tasks.push(task);
            createTask();
        }
        console.log(tasks);
    }
})


function createTask() {
    let div = document.getElementById("div");
    let li = document.createElement("li");
    li.innerHTML = tasks[tasks.length - 1];
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    li.appendChild(checkbox)
    div.append(li);
}
