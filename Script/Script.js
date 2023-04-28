let taskName = document.getElementById("taskTitle"),
    idContr = 0,
    taskData = document.getElementById("taskDescription"),
    addBtn = document.getElementById("Add"),
    error = document.getElementById("error"),
    output = document.getElementById("output");

addBtn.addEventListener("click", function (ev) {
    ev.preventDefault();
    let taskNameValue = taskName.value.trim(),
        taskDataValue = taskData.value.trim();

    function addTask(taskNameValue, taskDataValue) {
        idContr++;
        return `<div id="Task-${idContr}" class="Card">
            <h2>${taskNameValue}</h2>
            <p>${taskDataValue}</p>
            <input type="button" value="Done" class="btn done" id="Done-${idContr}">
            </div>`;
    }

    function errorFunction(error) {
        return `<div class="error"><p>${error}</p></div>`
    }

    error.innerHTML = "";
    if (taskNameValue.length <= 0 && taskDataValue.length <= 0) {
        error.insertAdjacentHTML("afterbegin", errorFunction("Enter Some Text!!"));
    } else {
        output.insertAdjacentHTML("afterbegin", addTask(taskNameValue, taskDataValue));
        doneBtn = document.getElementById("Done-" + idContr);
        doneBtn.addEventListener("click", function (ev) {
            ev.preventDefault();
            let taskID = "Task-" + ev.target.id.split("-")[1];
            document.getElementById(taskID).remove();
        })
        taskName.value = "";
        taskData.value = "";
    }
});

