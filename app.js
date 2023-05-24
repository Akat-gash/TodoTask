document.getElementById('addTaskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var taskInput = document.getElementById('taskInput');
    var task = taskInput.value;
    if (task.trim() !== '') {
        addTask(task);
        taskInput.value = '';
    }
});

function addTask(task) {
    var tasksList = document.getElementById('tasks');
    var li = document.createElement('li');
    li.textContent = task;
    tasksList.appendChild(li);
}
